import rollupTypescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "./src/main.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "es",
        sourcemap: true,
      },
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.min.js",
        format: "cjs",
        sourcemap: true,
        compact: true,
      },
      {
        file: "dist/index.esm.js",
        format: "es",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.min.js",
        format: "es",
        sourcemap: true,
        compact: true,
      },
      {
        file: "dist/index.amd.js",
        format: "amd",
        sourcemap: true,
      },
      {
        file: "dist/index.amd.min.js",
        format: "amd",
        sourcemap: true,
        compact: true,
      },
    ],
    plugins: [dts(), peerDepsExternal(), rollupTypescript()],
  },
];
