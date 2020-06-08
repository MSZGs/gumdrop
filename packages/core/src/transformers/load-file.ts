import { TransformerParams } from "../processor";

export async function loadFile({ file, utils }: TransformerParams) {
  const { fetchFile } = utils;

  file.content = await fetchFile(file.path);
}
