#!/usr/bin/env node

import Commander from "commander";
import Signale from "signale";
import FsExtra from "fs-extra";

import { dirname } from "path";

import { processor } from "../src/core/index.js";
import { resolvePath } from "./utils/resolve.js";
import { fetchFile } from "./utils/fetch.js";
import { loadModule } from "./utils/module.js";

const program = new Commander.Command();
const logger = new Signale.Signale({ scope: "gumdrop", interactive: true });

program
  .option("-i --input <path>", "path of the input file")
  .option("-o --output <path>", "path of the output .html file")
  .option("-c --css <css>", "path to the CSS file to use for formatting")
  .option("-t --title <title>", "title of the output document")
  .option("-q --quiet", "omit console output")
  .parse(process.argv);

async function generate(program) {
  if (program.quiet || !program.output) {
    logger.disable();
  }

  const inputFile = program.input || program.args[0] || process.stdin.fd;
  const outputFile = program.output || process.stdout.fd;
  const outputDir = program.output ? dirname(program.output) : "";

  try {
    logger.await(`Creating output dir...`);
    await FsExtra.ensureDir(outputDir);
  } catch (err) {
    logger.error(`Could not create output dir \`${outputDir}\`.\n`, err);
    return;
  }

  try {
    logger.await("Generating output...");
    const utils = { resolvePath, fetchFile, loadModule };
    const outputData = await processor.process(inputFile, utils);
    logger.await("Writing output...");
    await FsExtra.writeFile(outputFile, outputData);
    logger.success(`Created: ${outputFile}`);
  } catch (err) {
    logger.error(`Could create output file \`${outputFile}\`.\n`, err);
  }
}

generate(program);
