import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const packageJson = JSON.parse(
  fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'),
);
const requireFromPackage = createRequire(path.join(repoRoot, 'package.json'));

for (const target of [
  packageJson.exports?.['.']?.import,
  packageJson.exports?.['.']?.require,
  packageJson.exports?.['.']?.types,
]) {
  assert.equal(typeof target, 'string', 'Root package export is incomplete');
  assert.equal(
    fs.existsSync(path.resolve(repoRoot, target)),
    true,
    `Build output is missing: ${target}`,
  );
}

const esm = await import(packageJson.name);
const cjs = requireFromPackage(packageJson.name);
const expectedConstructors = [
  'FuturesClient',
  'SpotClient',
  'WebsocketAPIClient',
  'WebsocketClient',
];

for (const moduleFormat of [
  ['ESM', esm],
  ['CommonJS', cjs],
]) {
  const [label, sdk] = moduleFormat;
  for (const exportName of expectedConstructors) {
    assert.equal(
      typeof sdk[exportName],
      'function',
      `${label} consumer is missing ${exportName}`,
    );
  }
  assert.equal(
    typeof sdk.WS_KEY_MAP,
    'object',
    `${label} is missing WS_KEY_MAP`,
  );
  assert.equal(
    typeof sdk.DefaultLogger,
    'object',
    `${label} is missing DefaultLogger`,
  );

  const restClient = new sdk.SpotClient();
  const wsClient = new sdk.WebsocketClient();
  assert.equal(typeof restClient.getTicker, 'function');
  assert.equal(typeof wsClient.on, 'function');
  assert.equal(typeof wsClient.closeAll, 'function');
}

console.log('ESM and CommonJS consumer smoke passed.');
