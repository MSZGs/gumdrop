import { Processor } from "./classes/processor";
import { loadFile } from "./transformers/load-file";
import { splitFrontmatter } from "./transformers/split-frontmatter";
import { getFileType } from "./transformers/get-file-type";

export const processor = new Processor();

processor
  .addTransformer(getFileType)
  .addTransformer(loadFile)
  .addTransformer(splitFrontmatter);
