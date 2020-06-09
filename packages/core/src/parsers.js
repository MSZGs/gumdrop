import { textParser } from "./parsers/text.js";
import { htmlParser } from "./parsers/html.js";
import { markdownParser } from "./parsers/markdown.js";
import { jsonParser } from "./parsers/json.js";
import { yamlParser } from "./parsers/yaml.js";

export function getParserByName(name) {
  return parsers.find((parser) => parser.name === name);
}

export function getParserByExtension(extension) {
  return parsers.find((parser) => parser.extensions.includes(extension)) || defaultParser;
}

const parsers = [textParser, htmlParser, markdownParser, jsonParser, yamlParser];
const defaultParser = textParser;
