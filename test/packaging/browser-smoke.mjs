import { copyFile, cp, mkdir, mkdtemp, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { validateBrowserBundles } from './browser-bundle-validation.mjs';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);
const tempRoot = await mkdtemp(path.join(repoRoot, '.tmp-browser-smoke-'));

try {
  const installedPackageRoot = path.join(tempRoot, 'node_modules', 'htx-api');
  const consumerRoot = path.join(tempRoot, 'consumer');

  await mkdir(installedPackageRoot, { recursive: true });
  await mkdir(consumerRoot, { recursive: true });
  await Promise.all([
    copyFile(
      path.join(repoRoot, 'package.json'),
      path.join(installedPackageRoot, 'package.json'),
    ),
    cp(path.join(repoRoot, 'dist'), path.join(installedPackageRoot, 'dist'), {
      recursive: true,
    }),
    cp(path.join(repoRoot, 'test/consumer'), consumerRoot, { recursive: true }),
  ]);

  const { restBytes, websocketBytes } = await validateBrowserBundles({
    absWorkingDir: tempRoot,
    nodePaths: [path.join(repoRoot, 'node_modules')],
    restEntryPoint: 'consumer/browser-rest.ts',
    websocketEntryPoint: 'consumer/browser-websocket.ts',
  });

  console.log(
    `Browser smoke passed (REST ${restBytes} bytes; WebSocket ${websocketBytes} bytes).`,
  );
} finally {
  await rm(tempRoot, { force: true, recursive: true });
}
