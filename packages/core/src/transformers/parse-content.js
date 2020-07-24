import { getParserByExtension } from "../parsers.js";

export async function parseContent({ file, utils, processor }) {
  if (!file.hasContent || file.isContentParsed) {
    return;
  }

  const parser = getParserByExtension(file.extension);

  file.content = await parser.parse({ input: file.content, utils, processor });
  file.isContentParsed = true;
}
