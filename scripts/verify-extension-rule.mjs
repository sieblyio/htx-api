import assert from 'node:assert/strict';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import tsParser from '@typescript-eslint/parser';
import { Linter } from 'eslint';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const activeConfig = require(path.join(repositoryRoot, 'eslint.config.cjs'));
const typescriptConfig = activeConfig.find(
  (entry) => entry.name === 'htx/typescript',
);
const plugin = typescriptConfig?.plugins?.['require-extensions'];

assert.ok(typescriptConfig, 'Active TypeScript ESLint config is missing');
assert.equal(
  typescriptConfig.rules?.['require-extensions/require-extensions'],
  'error',
  'The pinned relative-extension rule must remain enabled as an error',
);
assert.equal(
  typescriptConfig.rules?.['require-extensions/require-index'],
  'error',
  'The pinned directory-import rule must remain enabled as an error',
);
assert.ok(plugin, 'The pinned require-extensions plugin is not active');

const linter = new Linter();
const isolatedConfig = {
  files: ['**/*.ts'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  plugins: {
    'require-extensions': plugin,
  },
  rules: {
    'require-extensions/require-extensions': 'error',
    'require-extensions/require-index': 'error',
  },
};

function verify(source) {
  return linter.verify(source, isolatedConfig, {
    filename: path.join(repositoryRoot, 'src/extension-rule-probe.ts'),
  });
}

for (const source of [
  "import './definitely-missing';",
  "import value from './definitely-missing';",
  "import type { Value } from './definitely-missing';",
  "export { value } from './definitely-missing';",
  "export type { Value } from './definitely-missing';",
  "export * from './definitely-missing';",
]) {
  const messages = verify(source);
  assert.equal(messages.length, 1, `Expected one error for: ${source}`);
  assert.equal(
    messages[0].ruleId,
    'require-extensions/require-extensions',
    `Unexpected diagnostic for ${source}: ${JSON.stringify(messages)}`,
  );
}

const directoryMessages = verify("import './lib';");
assert.equal(directoryMessages.length, 1);
assert.equal(
  directoryMessages[0].ruleId,
  'require-extensions/require-index',
  `Directory import was not rejected: ${JSON.stringify(directoryMessages)}`,
);

for (const source of [
  "import './lib/misc-util.js';",
  "import value from './lib/misc-util.js';",
  "import type { Value } from './lib/misc-util.js';",
  "export { value } from './lib/misc-util.js';",
  "export type { Value } from './lib/misc-util.js';",
  "export * from './lib/misc-util.js';",
  "import packageValue from 'package-name';",
  "import fs from 'node:fs';",
]) {
  assert.deepEqual(verify(source), [], `Expected no errors for: ${source}`);
}

const fixed = linter.verifyAndFix(
  "import value from './definitely-missing';",
  isolatedConfig,
  { filename: path.join(repositoryRoot, 'src/extension-rule-probe.ts') },
);
assert.equal(fixed.fixed, true, 'The pinned plugin autofix did not run');
assert.equal(
  fixed.output,
  "import value from './definitely-missing.js';",
  'The pinned plugin produced an unexpected autofix',
);

const compilerProbeRoot = await mkdtemp(
  path.join(repositoryRoot, '.tmp-extension-policy-'),
);

try {
  const targetPath = path.join(compilerProbeRoot, 'target.ts');
  const probePath = path.join(compilerProbeRoot, 'probe.ts');

  await Promise.all([
    writeFile(
      path.join(compilerProbeRoot, 'package.json'),
      '{"type":"module"}\n',
    ),
    writeFile(
      targetPath,
      'export type Value = string; export const value = 1;\n',
    ),
    writeFile(
      probePath,
      [
        "import { value } from './target';",
        "export { value } from './target';",
        "void import('./target');",
        "type Value = import('./target').Value;",
        'void value;',
        'void (null as unknown as Value);',
      ].join('\n'),
    ),
  ]);

  const program = ts.createProgram({
    rootNames: [probePath, targetPath],
    options: {
      module: ts.ModuleKind.NodeNext,
      moduleResolution: ts.ModuleResolutionKind.NodeNext,
      noEmit: true,
      strict: true,
      target: ts.ScriptTarget.ES2022,
    },
  });
  const diagnostics = ts.getPreEmitDiagnostics(program);

  assert.equal(
    diagnostics.length,
    4,
    `Expected four NodeNext extension diagnostics: ${JSON.stringify(
      diagnostics.map((diagnostic) => diagnostic.code),
    )}`,
  );
  assert.ok(
    diagnostics.every((diagnostic) => diagnostic.code === 2835),
    `Unexpected NodeNext diagnostics: ${JSON.stringify(
      diagnostics.map((diagnostic) => diagnostic.code),
    )}`,
  );
} finally {
  await rm(compilerProbeRoot, { force: true, recursive: true });
}

console.log('Pinned extension plugin and NodeNext policy verified.');
