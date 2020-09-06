import { File } from "../classes/file.js";

export const textParser = {
  name: "text",
  extensions: ["txt"],
  type: File.Types.DOCUMENT,

  async parse({ input }) {
    return input;
  },
};
