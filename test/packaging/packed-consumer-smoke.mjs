import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import {
  copyFile,
  mkdir,
  mkdtemp,
  readFile,
  rm,
  writeFile,
} from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { validateBrowserBundles } from './browser-bundle-validation.mjs';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);
const npmCli = process.env.npm_execpath;
let npmCache;

function runNpm(args, cwd, capture = false) {
  const command = npmCli
    ? process.execPath
    : process.platform === 'win32'
      ? 'npm.cmd'
      : 'npm';
  const commandArgs = npmCli ? [npmCli, ...args] : args;

  return execFileSync(command, commandArgs, {
    cwd,
    encoding: capture ? 'utf8' : undefined,
    env: {
      ...process.env,
      ...(npmCache ? { npm_config_cache: npmCache } : {}),
    },
    stdio: capture ? ['ignore', 'pipe', 'inherit'] : 'inherit',
  });
}

function runNode(args, cwd) {
  execFileSync(process.execPath, args, { cwd, stdio: 'inherit' });
}

const tempRoot = await mkdtemp(path.join(repoRoot, '.tmp-packed-smoke-'));
const consumerRoot = path.join(tempRoot, 'consumer');
npmCache = path.join(tempRoot, '.npm-cache');

try {
  const packOutput = runNpm(
    ['pack', '--json', '--ignore-scripts', '--pack-destination', tempRoot],
    repoRoot,
    true,
  );
  const [packResult] = JSON.parse(packOutput);
  assert.equal(
    packResult.name,
    '@siebly/htx-api',
    'Packed npm package has wrong name',
  );
  const tarballPath = path.join(tempRoot, packResult.filename);
  const packedFiles = new Set(packResult.files.map((file) => file.path));

  for (const requiredPath of [
    'package.json',
    'dist/cjs/lib/event-emitter.browser.js',
    'dist/cjs/lib/https-agent.browser.js',
    'dist/cjs/package.json',
    'dist/mjs/lib/event-emitter.browser.js',
    'dist/mjs/lib/https-agent.browser.js',
    'dist/mjs/package.json',
    'dist/mjs/index.d.ts',
  ]) {
    assert.equal(
      packedFiles.has(requiredPath),
      true,
      `Packed tarball is missing ${requiredPath}`,
    );
  }

  for (const filePath of packedFiles) {
    assert.equal(
      /(^|\/)(scripts|test|webpack)(\/|$)/.test(filePath),
      false,
      `Packed tarball unexpectedly contains ${filePath}`,
    );
  }

  await mkdir(path.join(consumerRoot, 'src'), { recursive: true });
  await writeFile(
    path.join(consumerRoot, 'package.json'),
    `${JSON.stringify(
      { name: 'htx-packed-consumer', private: true, type: 'module' },
      null,
      2,
    )}\n`,
  );

  runNpm(
    [
      'install',
      '--ignore-scripts',
      '--no-audit',
      '--no-fund',
      '--save-exact',
      tarballPath,
      'typescript@6.0.3',
    ],
    consumerRoot,
  );

  const runtimeConsumerAssertions = `
const expectedConstructors = [
  'FuturesClient',
  'SpotClient',
  'WebsocketAPIClient',
  'WebsocketClient',
];

for (const exportName of expectedConstructors) {
  assert.equal(
    typeof sdk[exportName],
    'function',
    \`Consumer is missing \${exportName}\`,
  );
}

assert.equal(typeof sdk.WS_KEY_MAP, 'object', 'Consumer is missing WS_KEY_MAP');
assert.equal(
  sdk.WS_KEY_MAP.derivativesPrivateV5,
  'derivativesPrivateV5',
  'Consumer is missing the V5 private derivatives WebSocket key',
);
assert.equal(
  typeof sdk.DefaultLogger,
  'object',
  'Consumer is missing DefaultLogger',
);

const restClient = new sdk.SpotClient();
const wsClient = new sdk.WebsocketClient();

assert.equal(typeof restClient.getTicker, 'function');
assert.equal(typeof wsClient.on, 'function');
assert.equal(typeof wsClient.closeAll, 'function');
`;

  for (const unwantedTypes of ['node', 'ws']) {
    const unwantedPath = path.join(
      consumerRoot,
      'node_modules',
      '@types',
      unwantedTypes,
      'package.json',
    );
    assert.rejects(
      readFile(unwantedPath),
      `Packed consumer unexpectedly installed @types/${unwantedTypes}`,
    );
  }

  await Promise.all([
    writeFile(
      path.join(consumerRoot, 'esm.mjs'),
      `import assert from 'node:assert/strict';
import * as sdk from '@siebly/htx-api';

${runtimeConsumerAssertions}
`,
    ),
    writeFile(
      path.join(consumerRoot, 'commonjs.cjs'),
      `const assert = require('node:assert/strict');
const sdk = require('@siebly/htx-api');

${runtimeConsumerAssertions}
`,
    ),
    copyFile(
      path.join(repoRoot, 'test/packaging/fixtures/browser-rest.ts'),
      path.join(consumerRoot, 'src/browser-rest.ts'),
    ),
    copyFile(
      path.join(repoRoot, 'test/packaging/fixtures/browser-websocket.ts'),
      path.join(consumerRoot, 'src/browser-websocket.ts'),
    ),
  ]);

  runNode(['esm.mjs'], consumerRoot);
  runNode(['commonjs.cjs'], consumerRoot);

  const { restBytes, websocketBytes } = await validateBrowserBundles({
    absWorkingDir: consumerRoot,
    restEntryPoint: 'src/browser-rest.ts',
    websocketEntryPoint: 'src/browser-websocket.ts',
  });

  const sharedTypeScriptOptions = {
    compilerOptions: {
      lib: ['ES2022', 'DOM', 'DOM.Iterable'],
      noEmit: true,
      skipLibCheck: false,
      strict: true,
      target: 'ES2022',
      types: [],
    },
    include: ['src/**/*.ts'],
  };
  const typeScriptConfigurations = [
    {
      fileName: 'tsconfig.bundler.json',
      options: { module: 'ESNext', moduleResolution: 'Bundler' },
    },
    {
      fileName: 'tsconfig.nodenext.json',
      options: { module: 'NodeNext', moduleResolution: 'NodeNext' },
    },
  ];

  for (const configuration of typeScriptConfigurations) {
    await writeFile(
      path.join(consumerRoot, configuration.fileName),
      `${JSON.stringify(
        {
          ...sharedTypeScriptOptions,
          compilerOptions: {
            ...sharedTypeScriptOptions.compilerOptions,
            ...configuration.options,
          },
        },
        null,
        2,
      )}\n`,
    );
    runNode(
      [
        path.join(consumerRoot, 'node_modules/typescript/bin/tsc'),
        '--project',
        configuration.fileName,
      ],
      consumerRoot,
    );
  }

  console.log(
    `Packed consumer smoke passed (${packResult.entryCount} files, ${packResult.size} packed bytes, ${packResult.unpackedSize} unpacked bytes; REST browser bundle ${restBytes} bytes; WebSocket browser bundle ${websocketBytes} bytes).`,
  );
} finally {
  await rm(tempRoot, { force: true, recursive: true });
}
