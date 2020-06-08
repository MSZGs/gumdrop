import { TransformerParams } from "classes/processor";
import { getParserByName } from "parsers";

export async function parseData({ file, utils, processor }: TransformerParams) {
  if (file.isDataParsed) {
    return;
  }

  const parser = getParserByName("yaml");
  const input = file.data as string;

  file.data = await parser.parse({ input, utils, processor });
}
