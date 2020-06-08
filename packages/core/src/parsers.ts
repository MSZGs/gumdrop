import { Processor, ProcessorUtils } from "./classes/processor";
import { parseText } from "./parsers/text";
import { parseHtml } from "./parsers/html";
import { parseMarkdown } from "./parsers/markdown";
import { parseJson } from "./parsers/json";
import { parseYaml } from "./parsers/yaml";
import { FileType } from "./classes/file";

export interface ParserParams {
  input: string;
  utils: ProcessorUtils;
  processor: Processor;
}

export type Parser = (params: ParserParams) => Promise<string | object>;
export type DocumentParser = (params: ParserParams) => Promise<string>;
export type DataParser = (params: ParserParams) => Promise<object>;

export function getParserByExtension(extension: string) {
  return Object.values(Parsers).find((parser) =>
    parser.extensions.includes(extension)
  );
}

export const Parsers = {
  TEXT: {
    extensions: ["txt"],
    type: FileType.DOCUMENT,
    parse: parseText,
  },
  HTML: {
    extensions: ["html", "htm", "xhtml"],
    type: FileType.DOCUMENT,
    parse: parseHtml,
  },
  MARKDOWN: {
    extensions: ["md", "markdown"],
    type: FileType.DOCUMENT,
    parse: parseMarkdown,
  },
  JSON: {
    extensions: ["json"],
    type: FileType.DATA,
    parse: parseJson,
  },
  YAML: {
    extensions: ["yaml", "yml"],
    type: FileType.DATA,
    parse: parseYaml,
  },
};
