import { ParserParams } from "parsers";
import { FileType } from "classes/file";

export const htmlParser = {
  name: "html",
  extensions: ["html", "htm", "xhtml"],
  type: FileType.DOCUMENT,
  async parse({ input }: ParserParams) {
    return input;
  },
};
