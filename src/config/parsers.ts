import { FileType } from "core/classes/file";

export interface ParseFunction {
  (input: string): Promise<any>;
}

export interface Parser {
  type: FileType;
  extensions: Array<string>;
  parse: ParseFunction;
}

export const Parsers: { [name: string]: Parser } = {
  TEXT: {
    type: FileType.DOCUMENT,
    extensions: [] as string[],
    parse: async () => null,
  },
  HTML: {
    type: FileType.DOCUMENT,
    extensions: ["html", "htm", "xhtml"],
    parse: async () => null,
  },
  MARKDOWN: {
    type: FileType.DOCUMENT,
    extensions: ["md", "markdown"],
    parse: async () => null,
  },
  JSON: {
    type: FileType.DATA,
    extensions: ["json"],
    parse: async () => null,
  },
  YAML: {
    type: FileType.DATA,
    extensions: ["yaml", "yml"],
    parse: async () => null,
  },
};
