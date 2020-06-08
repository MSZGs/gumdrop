import { ParserParams } from "parsers";
import { FileType } from "classes/file";

export const jsonParser = {
  name: "json",
  extensions: ["json"],
  type: FileType.DATA,
  async parse({ input }: ParserParams) {
    return JSON.parse(input);
  },
};
