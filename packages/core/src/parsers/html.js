import { File } from "../classes/file.js";

export const htmlParser = {
  name: "html",
  extensions: ["html", "htm", "xhtml"],
  type: File.Types.DOCUMENT,

  async parse({ input }) {
    return input;
  },
};
