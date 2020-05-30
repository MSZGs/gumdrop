import { Transformer } from "core/classes/transformer";
import { parseText } from "core/parsers/text";
import { parseYaml } from "core/parsers/yaml";

export interface ParseFunction {
  (input: string, transformer: Transformer): Promise<any>;
}

export interface Parser {
  extensions: Array<string>;
  parse: ParseFunction;
}

export const Parsers: { [name: string]: Parser } = {
  TEXT: {
    extensions: [] as string[],
    parse: parseText,
  },
  HTML: {
    extensions: ["html", "htm", "xhtml"],
    parse: async () => null,
  },
  MARKDOWN: {
    extensions: ["md", "markdown"],
    parse: async () => null,
  },
  JSON: {
    extensions: ["json"],
    parse: async () => null,
  },
  YAML: {
    extensions: ["yaml", "yml"],
    parse: parseYaml,
  },
};
