import { ParserParams } from "parsers";
import { FileType } from "classes/file";

export const textParser = {
  name: "text",
  extensions: ["txt"],
  type: FileType.DOCUMENT,
  async parse({ input }: ParserParams) {
    return input;
  },
};
