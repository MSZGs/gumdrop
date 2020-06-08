import { TransformerParams } from "../classes/processor";
import { getParserByExtension } from "../parsers";

export async function getFileType({ file }: TransformerParams) {
  const parser = getParserByExtension(file.extension);

  file.type = parser.type;
}
