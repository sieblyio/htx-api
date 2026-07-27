const { transformSync } = require('esbuild');

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
