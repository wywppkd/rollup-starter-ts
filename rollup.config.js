import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "src/main.ts",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: "runtime",
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ],
};
