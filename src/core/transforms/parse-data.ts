import { Parsers } from "config/parsers";
import { File } from "core/classes/file";
import { Transformer } from "core/classes/transformer";

export async function parseData(file: File, transformer: Transformer) {
  if (typeof file.data !== "string") {
    return;
  }

  const parser = Parsers.YAML;

  file.data = parser.parse(file.data, transformer);
}
