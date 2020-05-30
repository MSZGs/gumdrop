import { Parsers } from "config/parsers";
import { File } from "core/classes/file";
import { Transformer } from "core/classes/transformer";

function getParser(extension: string) {
  const parser = Object.values(Parsers).find((parser) =>
    parser.extensions.includes(extension)
  );

  return parser || Parsers.TEXT;
}

export async function parseContent(file: File, transformer: Transformer) {
  if (typeof file.content !== "string") {
    return;
  }

  const parser = getParser(file.extension);

  file.content = parser.parse(file.content, transformer);
}
