import { TransformerParams } from "classes/processor";
import { Parsers } from "parsers";

export async function parseData({ file, utils, processor }: TransformerParams) {
  if (typeof file.data !== "string") {
    return;
  }

  const parser = Parsers.YAML;

  file.data = parser.parse({ input: file.data, utils, processor });
}
