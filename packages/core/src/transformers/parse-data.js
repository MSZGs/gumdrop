import { getParserByName } from "../parsers.js";

export async function parseData({ file, utils, processor }) {
  if (!file.hasData || file.isDataParsed) {
    return;
  }

  const parser = file.isDataFile ? getParserByName(file.extension) : getParserByName("yaml");

  file.data = await parser.parse({ input: file.data, utils, processor });
  file.isDataParsed = true;
}
