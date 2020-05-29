import { Transformer } from "core/classes/transformer";

export async function loadFile(transformer: Transformer) {
  const { fetchFile } = transformer.utils;
  transformer.file.contents = await fetchFile(transformer.file.path);
}
