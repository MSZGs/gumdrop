import { ParserParams } from "parsers";

export async function parseJson({ input }: ParserParams) {
  return JSON.parse(input);
}
