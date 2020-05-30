import { Transformer } from "core/classes/transformer";

export async function loadFile({ file, utils }: Transformer) {
  const { fetchFile } = utils;

  file.contents = await fetchFile(file.path);
}
