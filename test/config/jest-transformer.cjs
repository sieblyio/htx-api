const { transformSync } = require('esbuild');

/** Compile TypeScript test files into the CommonJS format expected by Jest. */
module.exports = {
  process(sourceText, sourcePath) {
    const result = transformSync(sourceText, {
      format: 'cjs',
      loader: sourcePath.endsWith('.tsx') ? 'tsx' : 'ts',
      sourcefile: sourcePath,
      sourcemap: 'inline',
      target: 'node22',
    });

    return { code: result.code };
  },
};
