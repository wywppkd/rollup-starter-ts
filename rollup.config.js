import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: 'src/main.ts',
  output: [
    { file: pkg.main, format: 'cjs', exports: 'auto' },
    { file: pkg.module, format: 'es', exports: 'auto' },
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.mjs', '.ts', '.es', '.json', '.node', '.jsx', 'tsx', '.vue'],
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    babel({
      babelHelpers: 'runtime',
      include: 'src/**/*',
      extensions: ['.js', '.mjs', '.ts', '.es', '.json', '.node', '.jsx', 'tsx', '.vue'],
    }),
    postcss({
      plugins: [],
      autoModules: true,
    }),
  ],
};
