import { textParser } from "./parsers/text.js";
import { htmlParser } from "./parsers/html.js";
import { markdownParser } from "./parsers/markdown.js";
import { jsonParser } from "./parsers/json.js";
import { yamlParser } from "./parsers/yaml.js";

export function getParserByName(name) {
  const parser = parsers.find((parser) => parser.name === name);

  if (!parser) {
    throw new Error(`Parser "${name}" not found`);
  }

  return parser;
}

export function getParserByExtension(extension) {
  const parser = parsers.find((parser) => parser.extensions.includes(extension));

  return parser || defaultParser;
}

const parsers = [textParser, htmlParser, markdownParser, jsonParser, yamlParser];
const defaultParser = textParser;
