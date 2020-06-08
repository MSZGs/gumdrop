import { Processor } from "classes/processor";
import { getFileType } from "transformers/get-file-type";
import { loadFile } from "transformers/load-file";
import { splitFrontmatter } from "transformers/split-frontmatter";
import { parseData } from "transformers/parse-data";
import { parseContent } from "transformers/parse-content";
import { renderTemplate } from "transformers/render-template";

export const processor = new Processor();

processor
  .addTransformer(getFileType)
  .addTransformer(loadFile)
  .addTransformer(splitFrontmatter)
  .addTransformer(parseData)
  .addTransformer(parseContent)
  .addTransformer(renderTemplate);
