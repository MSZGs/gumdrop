import { TransformUtils } from "core/types";
import { Transformer } from "./classes/transformer";

export async function transformFile(path: string, utils: TransformUtils) {
  const transformer = new Transformer(path, utils);

  await transformer.applyTransforms();

  return transformer.getResult();
}
