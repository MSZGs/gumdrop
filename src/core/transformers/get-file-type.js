import { getParserByExtension } from "../parsers.js";

export async function getFileType({ file }) {
  const parser = getParserByExtension(file.extension);

  file.type = parser.type;
}
