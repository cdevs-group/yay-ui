import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";

export default {
  input: "src/index.ts",
  output: [
    { file: 'dist/index.js', format: "cjs" },
    { file: 'dist/index2.js', format: "es" },
  ],
  plugins: [url(), typescript()],
};
