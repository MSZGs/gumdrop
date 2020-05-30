import { Transformer, TransformUtils } from "./classes/transformer";
import { loadFile } from "./transforms/load-file";
import { splitFrontmatter } from "./transforms/split-frontmatter";

export async function transformFile(path: string, utils: TransformUtils) {
  const transformer = new Transformer(path, utils);

  transformer.addTransform(loadFile).addTransform(splitFrontmatter);
  await transformer.applyTransforms();

  return transformer.getResult();
}
