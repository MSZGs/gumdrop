import { TransformerParams } from "classes/processor";
import { getParserByExtension } from "parsers";

export async function parseContent({ file, utils, processor }: TransformerParams) {
  if (!file.isDocument) {
    return;
  }

  const parser = getParserByExtension(file.extension);
  const input = file.content;

  file.content = await parser.parse({ input, utils, processor });
}
