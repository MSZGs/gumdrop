import { TransformerParams } from "classes/processor";
import { getParserByExtension } from "parsers";

export async function parseContent({
  file,
  utils,
  processor,
}: TransformerParams) {
  if (!file.isDocument) {
    return;
  }

  const parser = getParserByExtension(file.extension);

  file.content = await parser.parse({ input: file.content, utils, processor });
}
