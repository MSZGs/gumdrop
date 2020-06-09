import { FileType } from "../classes/file.js";

export const htmlParser = {
  name: "html",
  extensions: ["html", "htm", "xhtml"],
  type: FileType.DOCUMENT,
  async parse({ input }) {
    return input;
  },
};
