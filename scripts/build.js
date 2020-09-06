import FsExtra from "fs-extra";

import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
// import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";

import { rollup } from "rollup";
import { terser } from "rollup-plugin-terser";

const plugins = [
  json(),
  nodeResolve({ preferBuiltins: false }),
  // babel({ babelHelpers: "bundled" }),
  commonjs(),
];

function clearDist() {
  if (FsExtra.existsSync("dist")) {
    FsExtra.unlinkSync("dist");
  }
}

async function buildModules() {
  const inputs = [
    "src/core/modules/markdown.js",
    "src/core/modules/mustache.js",
    "src/core/modules/yaml.js",
  ];

  const outputs = {
    development: {
      format: "esm",
      dir: "dist/modules",
      entryFileNames: "[name].js",
      sourcemap: true,
    },
    production: {
      format: "esm",
      dir: "dist/modules",
      entryFileNames: "[name].min.js",
      plugins: [terser()],
    },
  };

  for (const input of inputs) {
    const bundle = await rollup({ input, plugins });

    bundle.write(outputs.development);
    bundle.write(outputs.production);
  }
}

async function buildWeb() {
  const input = "src/web/index.js";
  const bundle = await rollup({ input, plugins });

  const outputs = {
    development: {
      format: "esm",
      dir: "dist",
      entryFileNames: "gumdrop.js",
      sourcemap: true,
    },
    production: {
      format: "esm",
      dir: "dist",
      entryFileNames: "gumdrop.min.js",
      plugins: [terser()],
    },
  };

  bundle.write(outputs.development);
  bundle.write(outputs.production);
}

clearDist();
buildModules();
buildWeb();
