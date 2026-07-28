import assert from 'node:assert/strict';
import { builtinModules } from 'node:module';
import path from 'node:path';

import { build } from 'esbuild';

/** Bundle consumer fixtures and verify that browser-safe package paths resolve. */
const normalisePath = (value) => value.replaceAll('\\', '/');
const nodeBuiltins = new Set(
  builtinModules.map((name) => name.replace(/^node:/, '')),
);

const rejectNodeBuiltins = {
  name: 'reject-node-builtins',
  setup(esbuild) {
    esbuild.onResolve({ filter: /.*/ }, (args) => {
      const bareName = args.path.replace(/^node:/, '');
      if (!nodeBuiltins.has(bareName)) {
        return;
      }

      return {
        errors: [
          {
            text: `Browser bundle reached Node.js builtin "${args.path}" from ${args.importer || 'the entry point'}`,
          },
        ],
      };
    });
  },
};

async function bundleFixture({ absWorkingDir, entryPoint, label, nodePaths }) {
  const result = await build({
    absWorkingDir,
    bundle: true,
    conditions: ['browser', 'import', 'default'],
    entryPoints: [entryPoint],
    format: 'esm',
    logLevel: 'silent',
    mainFields: ['browser', 'module', 'main'],
    metafile: true,
    nodePaths,
    outfile: path.join(absWorkingDir, '.browser-smoke', `${label}.js`),
    platform: 'browser',
    plugins: [rejectNodeBuiltins],
    sourcemap: false,
    target: ['chrome120', 'firefox120', 'safari17'],
    treeShaking: true,
    write: false,
  });

  const includedInputs = new Map();
  const externalImports = [];

  for (const output of Object.values(result.metafile.outputs)) {
    externalImports.push(...output.imports.filter((entry) => entry.external));
    for (const [input, contribution] of Object.entries(output.inputs)) {
      if (contribution.bytesInOutput > 0) {
        const inputPath = `/${normalisePath(input).replace(/^\/+/, '')}`;
        includedInputs.set(
          inputPath,
          (includedInputs.get(inputPath) || 0) + contribution.bytesInOutput,
        );
      }
    }
  }

  assert.deepEqual(
    externalImports,
    [],
    `${label} left external imports in the browser bundle`,
  );

  return { inputs: [...includedInputs.keys()], result };
}

function includesPath(inputs, fragment) {
  return inputs.some((input) => input.includes(fragment));
}

export async function validateBrowserBundles({
  absWorkingDir,
  nodePaths = [],
  restEntryPoint,
  websocketEntryPoint,
}) {
  const rest = await bundleFixture({
    absWorkingDir,
    entryPoint: restEntryPoint,
    label: 'rest-only',
    nodePaths,
  });

  for (const forbidden of [
    '/node_modules/events/',
    '/node_modules/eventemitter3/',
    '/node_modules/isomorphic-ws/',
    '/node_modules/ws/',
    '/lib/BaseWSClient.',
    '/WebsocketClient.',
  ]) {
    assert.equal(
      includesPath(rest.inputs, forbidden),
      false,
      `REST-only browser bundle unexpectedly included ${forbidden}`,
    );
  }

  assert.equal(
    includesPath(rest.inputs, '/lib/https-agent.browser.js'),
    true,
    'REST-only bundle did not select the browser HTTPS adapter',
  );
  assert.equal(
    includesPath(rest.inputs, '/axios/lib/platform/browser/index.js'),
    true,
    'REST-only bundle did not select Axios browser platform code',
  );
  assert.equal(
    includesPath(rest.inputs, '/axios/lib/adapters/http.js'),
    false,
    'REST-only bundle included the Axios Node HTTP adapter',
  );

  const websocket = await bundleFixture({
    absWorkingDir,
    entryPoint: websocketEntryPoint,
    label: 'websocket',
    nodePaths,
  });

  assert.equal(
    includesPath(websocket.inputs, '/node_modules/isomorphic-ws/browser.js'),
    true,
    'WebSocket browser bundle did not select isomorphic-ws/browser.js',
  );
  assert.equal(
    includesPath(websocket.inputs, '/node_modules/isomorphic-ws/node.js'),
    false,
    'WebSocket browser bundle selected the Node.js isomorphic-ws adapter',
  );
  assert.equal(
    includesPath(websocket.inputs, '/node_modules/events/events.js'),
    true,
    'WebSocket browser bundle did not include the pinned EventEmitter adapter',
  );
  assert.equal(
    includesPath(websocket.inputs, '/lib/event-emitter.browser.js'),
    true,
    'WebSocket browser bundle did not select the browser EventEmitter adapter',
  );
  assert.equal(
    includesPath(websocket.inputs, '/lib/https-agent.browser.js'),
    true,
    'WebSocket browser bundle did not select the browser HTTPS adapter',
  );
  assert.equal(
    includesPath(websocket.inputs, '/axios/lib/platform/browser/index.js'),
    true,
    'WebSocket browser bundle did not select Axios browser platform code',
  );
  assert.equal(
    includesPath(websocket.inputs, '/axios/lib/adapters/http.js'),
    false,
    'WebSocket browser bundle included the Axios Node HTTP adapter',
  );
  assert.equal(
    includesPath(websocket.inputs, '/node_modules/ws/'),
    false,
    'WebSocket browser bundle included the Node.js ws implementation',
  );

  return {
    restBytes: rest.result.outputFiles.reduce(
      (total, output) => total + output.contents.byteLength,
      0,
    ),
    websocketBytes: websocket.result.outputFiles.reduce(
      (total, output) => total + output.contents.byteLength,
      0,
    ),
  };
}
