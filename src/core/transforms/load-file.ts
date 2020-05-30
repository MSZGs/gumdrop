import { File } from "core/classes/file";
import { Transformer } from "core/classes/transformer";

export async function loadFile(file: File, transformer: Transformer) {
  const { fetchFile } = transformer.utils;

  file.content = await fetchFile(file.path);
}
