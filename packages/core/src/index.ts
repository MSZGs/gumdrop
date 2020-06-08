import { Processor } from "classes/processor";
import { getFileType } from "transformers/get-file-type";
import { loadFile } from "transformers/load-file";
import { splitFrontmatter } from "transformers/split-frontmatter";

export const processor = new Processor();

processor
  .addTransformer(getFileType)
  .addTransformer(loadFile)
  .addTransformer(splitFrontmatter);
