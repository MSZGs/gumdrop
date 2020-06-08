import { ParserParams } from "parsers";
import { FileType } from "classes/file";

export const markdownParser = {
  name: "markdown",
  extensions: ["md", "markdown"],
  type: FileType.DOCUMENT,
  async parse({ input, utils }: ParserParams) {
    const { loadModule } = utils;
    const { markdownToHtml } = await loadModule("markdown");

    return markdownToHtml(input);
  },
};
