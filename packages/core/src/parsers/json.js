import { FileType } from "../classes/file.js";

export const jsonParser = {
  name: "json",
  extensions: ["json"],
  type: FileType.DATA,
  async parse({ input }) {
    return JSON.parse(input);
  },
};
