import { Processor } from "classes/processor";
import { resolvePath } from "transformers/resolve-path";
import { getFileType } from "transformers/get-file-type";
import { loadFile } from "transformers/load-file";
import { splitFrontmatter } from "transformers/split-frontmatter";
import { parseData } from "transformers/parse-data";
import { resolveData } from "transformers/resolve-data";
import { parseContent } from "transformers/parse-content";
import { renderTemplate } from "transformers/render-template";

export { File } from "classes/file";
export { Processor } from "classes/processor";
export const processor = new Processor();

processor
  .addTransformer(resolvePath)
  .addTransformer(getFileType)
  .addTransformer(loadFile)
  .addTransformer(splitFrontmatter)
  .addTransformer(parseData)
  .addTransformer(resolveData)
  .addTransformer(parseContent)
  .addTransformer(renderTemplate);
