import { ParserParams } from "../parsers";

export async function parseMarkdown({ input, utils }: ParserParams) {
  const { loadModule } = utils;
  const { markdownToHtml } = await loadModule("markdown");

  return markdownToHtml(input);
}
