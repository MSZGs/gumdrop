import { Transformer, TransformUtils } from "./classes/transformer";
import { loadFile } from "./transforms/load-file";

export async function transformFile(path: string, utils: TransformUtils) {
  const transformer = new Transformer(path, utils);

  transformer.addTransform(loadFile);
  await transformer.applyTransforms();

  return transformer.getResult();
}
