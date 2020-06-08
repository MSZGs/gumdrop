import { Processor, ProcessorUtils } from "classes/processor";
import { textParser } from "parsers/text";
import { htmlParser } from "parsers/html";
import { markdownParser } from "parsers/markdown";
import { jsonParser } from "parsers/json";
import { yamlParser } from "parsers/yaml";

export interface ParserParams {
  input: string;
  utils: ProcessorUtils;
  processor: Processor;
}

export type Parser = (params: ParserParams) => Promise<string | object>;
export type DocumentParser = (params: ParserParams) => Promise<string>;
export type DataParser = (params: ParserParams) => Promise<object>;

export function getParserByName(name: string) {
  return parsers.find((parser) => parser.name === name);
}

export function getParserByExtension(extension: string) {
  return parsers.find((parser) => parser.extensions.includes(extension)) || defaultParser;
}

const parsers = [textParser, htmlParser, markdownParser, jsonParser, yamlParser];
const defaultParser = textParser;
