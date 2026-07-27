import { copyFile, mkdir, readdir, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = join(repositoryRoot, 'src');
const outputRoots = [
  { path: join(repositoryRoot, 'dist/cjs'), type: 'commonjs' },
  { path: join(repositoryRoot, 'dist/mjs'), type: 'module' },
];
const browser = {
  './lib/https-agent.js': './lib/https-agent.browser.js',
  './lib/event-emitter.js': './lib/event-emitter.browser.js',
};

async function copySourceDeclarations(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      const sourcePath = join(directory, entry.name);

      if (entry.isDirectory()) {
        await copySourceDeclarations(sourcePath);
        return;
      }

      if (!entry.name.endsWith('.d.ts')) {
        return;
      }

      const relativePath = relative(sourceRoot, sourcePath);
      await Promise.all(
        outputRoots.map(async (outputRoot) => {
          const destination = join(outputRoot.path, relativePath);
          await mkdir(dirname(destination), { recursive: true });
          await copyFile(sourcePath, destination);
        }),
      );
    }),
  );
}

await Promise.all(
  outputRoots.map(async (outputRoot) => {
    await mkdir(outputRoot.path, { recursive: true });
    await writeFile(
      join(outputRoot.path, 'package.json'),
      `${JSON.stringify(
        { type: outputRoot.type, browser, sideEffects: false },
        null,
        2,
      )}\n`,
    );
  }),
);

await copySourceDeclarations(sourceRoot);
