import { Transformer } from "core/classes/transformer";
import { parseText } from "core/parsers/text";
import { parseHtml } from "core/parsers/html";
import { parseMarkdown } from "core/parsers/markdown";
import { parseJson } from "core/parsers/json";
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
    parse: parseHtml,
  },
  MARKDOWN: {
    extensions: ["md", "markdown"],
    parse: parseMarkdown,
  },
  JSON: {
    extensions: ["json"],
    parse: parseJson,
  },
  YAML: {
    extensions: ["yaml", "yml"],
    parse: parseYaml,
  },
};
