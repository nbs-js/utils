const rollupTypescript = require("@rollup/plugin-typescript")
const peerDepsExternal = require("rollup-plugin-peer-deps-external")
// const rollupPluginDts = require("rollup-plugin-dts")

module.exports = [
  {
    input: "./src/main.ts",
    output: [
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
      }
    ],
    plugins: [peerDepsExternal(), rollupTypescript()],
  },
  // {
  //   input: './src/main.ts',
  //   output: {
  //     file: "dist/index.d.ts",
  //     format: "es"
  //   },
  //   plugins: [dts]
  // }
]
