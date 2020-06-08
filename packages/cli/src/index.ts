import { dirname } from "path";
import Commander from "commander";
import Signale from "signale";
import FileSystem from "fs-extra";

import { processor } from "@gumdrop/core";
import { resolvePath } from "./utils/resolve.js";
import { fetchFile } from "./utils/fetch.js";
import { loadModule } from "./utils/module.js";

const program = new Commander.Command();
const logger = new Signale.Signale({ scope: "gumdrop", interactive: true });

program
  .description("CLI for converting Gumdrop documents to HTML")
  .usage("<input> [options]")
  .option("-i --input [path]", "path of the input file")
  .option("-o --output [path]", "path of the output .html file")
  .option("-c --css [css]", "path to the CSS file to use for formatting")
  .option("-t --title [title]", "title of the output document")
  .option("-q --quiet", "omit console output")
  .parse(process.argv);

async function convert(program) {
  const input = {
    file: program.input || program.args[0] || process.stdin.fd,
  };

  const output = {
    dir: program.output ? dirname(program.output) : "",
    file: program.output || process.stdout.fd,
    data: null,
  };

  if (program.quiet || output.file === process.stdout.fd) {
    logger.disable();
  }

  try {
    await FileSystem.ensureDir(output.dir);
  } catch (err) {
    logger.error(`Could not create output dir \`${output.dir}\`.\n`, err);
    return;
  }

  try {
    logger.await("Generating output...");
    output.data = await processor.process(input.file, { resolvePath, fetchFile, loadModule });
  } catch (err) {
    logger.error(`Could not parse input data.\n`, err);
    return;
  }

  try {
    logger.await("Writing output...");
    await FileSystem.writeFile(output.file, output.data);
    logger.success(`Created: ${output.file}`);
  } catch (err) {
    logger.error(`Could not write output file \`${output.file}\`.\n`, err);
  }
}

convert(program);
