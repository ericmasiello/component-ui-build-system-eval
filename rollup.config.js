import babel from 'rollup-plugin-babel';
// A Rollup plugin to convert CommonJS modules to ES6, so they can be
// included in a Rollup bundle
import commonjs from '@rollup/plugin-commonjs';

// Automatically externalize peerDependencies in a rollup bundle.
// Also optionally externalize dependencies in a rollup bundle.
import external from 'rollup-plugin-peer-deps-external';

//  A Rollup plugin which locates modules using the Node resolution
// algorithm, for using third party modules in node_modules
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({ extensions }),
    babel({
      runtimeHelpers: true,
      extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
    }),
    external(),
    commonjs(),
  ],
};
