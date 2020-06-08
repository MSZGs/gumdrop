import { TransformerParams } from "classes/processor";

export async function loadFile({ file, utils }: TransformerParams) {
  const fileContent = await utils.fetchFile(file.path);

  if (file.isDocument) {
    file.content = fileContent;
  } else if (file.isData) {
    file.data = fileContent;
  }
}
