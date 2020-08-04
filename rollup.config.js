// rollup.config.js
import pkg from "./package.json";
//import typescript from "rollup-plugin-typescript2";

export default {
  input: "./dist/webglplot.js",
  //plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  output: [
    { file: pkg.main, format: "umd", name: "WebGLPlotBundle", exports: "named" },
    { file: pkg.module, format: "es" },
  ],
};
