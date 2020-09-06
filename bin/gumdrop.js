#!/usr/bin/env node

import Commander from "commander";

const program = new Commander.Command();

program
  .description("CLI for generating documents and static sites using Gumdrop")
  .usage("<command> [options]")
  .command("html", "Generate a HTML document with Gumdrop")
  .alias("h")
  .command("pdf", "Generate a PDF document with Gumdrop")
  .alias("p")
  .command("ssg", "Generate a static site from a folder with Gumdrop")
  .alias("s")
  .parse(process.argv);
