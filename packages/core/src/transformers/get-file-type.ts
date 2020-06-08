import { TransformerParams } from "../classes/processor";
import { FileType } from "../classes/file";

export async function getFileType({ file }: TransformerParams) {
  file.type = FileType.DOCUMENT;
}
