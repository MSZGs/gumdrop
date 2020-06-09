import { FileType } from "../classes/file.js";

export const textParser = {
  name: "text",
  extensions: ["txt"],
  type: FileType.DOCUMENT,
  async parse({ input }) {
    return input;
  },
};
