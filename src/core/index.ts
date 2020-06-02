import { Transformer, TransformUtils } from "./classes/transformer";
import { loadFile } from "./transforms/load-file";
import { splitFrontmatter } from "./transforms/split-frontmatter";
import { parseData } from "./transforms/parse-data";
import { parseContent } from "./transforms/parse-content";
import { renderTemplate } from "./transforms/render-template";

export async function transformFile(path: string, utils: TransformUtils) {
  const transformer = new Transformer(utils);

  transformer
    .addTransform(loadFile)
    .addTransform(splitFrontmatter)
    .addTransform(parseData)
    .addTransform(parseContent)
    .addTransform(renderTemplate);
  return transformer.transform(path);
}
