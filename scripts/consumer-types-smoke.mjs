import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const require = createRequire(import.meta.url);
const ts = require('typescript');
const declarationEntry = path.join(repoRoot, 'dist/mjs/index.d.ts');

assert.equal(
  fs.existsSync(declarationEntry),
  true,
  'Build declarations first: dist/mjs/index.d.ts is missing',
);

const rootNames = [
  path.join(repoRoot, 'test/consumer/browser-rest.ts'),
  path.join(repoRoot, 'test/consumer/browser-websocket.ts'),
];
const sharedOptions = {
  allowSyntheticDefaultImports: true,
  esModuleInterop: true,
  lib: ['lib.es2022.d.ts', 'lib.dom.d.ts', 'lib.dom.iterable.d.ts'],
  noEmit: true,
  skipLibCheck: false,
  strict: true,
  target: ts.ScriptTarget.ES2022,
  types: [],
};
const configurations = [
  {
    label: 'Bundler',
    module: ts.ModuleKind.ESNext,
    moduleResolution: ts.ModuleResolutionKind.Bundler,
  },
  {
    label: 'NodeNext',
    module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
  },
];
const formatHost = {
  getCanonicalFileName: (fileName) => fileName,
  getCurrentDirectory: () => repoRoot,
  getNewLine: () => ts.sys.newLine,
};

for (const configuration of configurations) {
  const options = {
    ...sharedOptions,
    module: configuration.module,
    moduleResolution: configuration.moduleResolution,
  };
  const program = ts.createProgram({ options, rootNames });
  const diagnostics = ts.getPreEmitDiagnostics(program);

  if (diagnostics.length) {
    console.error(`DOM-only ${configuration.label} consumer failed:`);
    console.error(
      ts.formatDiagnosticsWithColorAndContext(diagnostics, formatHost),
    );
    process.exitCode = 1;
  } else {
    console.log(`DOM-only ${configuration.label} consumer passed.`);
  }
}
