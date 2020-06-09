import { getParserByExtension } from "../parsers.js";

export async function parseContent({ file, utils, processor }) {
  if (!file.isDocument) {
    return;
  }

  const parser = getParserByExtension(file.extension);

  file.content = await parser.parse({ input: file.content, utils, processor });
}
