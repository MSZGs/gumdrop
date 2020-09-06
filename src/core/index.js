import { Processor } from "./classes/processor.js";
import { resolvePath } from "./transformers/resolve-path.js";
import { getFileType } from "./transformers/get-file-type.js";
import { loadFile } from "./transformers/load-file.js";
import { splitFrontmatter } from "./transformers/split-frontmatter.js";
import { parseData } from "./transformers/parse-data.js";
import { resolveData } from "./transformers/resolve-data.js";
import { parseContent } from "./transformers/parse-content.js";
import { renderTemplate } from "./transformers/render-template.js";

export { File } from "./classes/file.js";
export { Processor } from "./classes/processor.js";

export const processor = new Processor();

processor
  .addTransformer(resolvePath)
  .addTransformer(getFileType)
  .addTransformer(loadFile)
  .addTransformer(splitFrontmatter)
  .addTransformer(parseData)
  .addTransformer(resolveData)
  .addTransformer(renderTemplate)
  .addTransformer(parseContent);
