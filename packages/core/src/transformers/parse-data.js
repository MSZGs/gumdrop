import { getParserByName } from "../parsers.js";

export async function parseData({ file, utils, processor }) {
  if (file.isDataParsed) {
    return;
  }

  const parser = getParserByName("yaml");

  file.data = await parser.parse({ input: file.data, utils, processor });
}
