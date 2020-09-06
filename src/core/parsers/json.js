import { File } from "../classes/file.js";

export const jsonParser = {
  name: "json",
  extensions: ["json"],
  type: File.Types.DATA,

  async parse({ input }) {
    return JSON.parse(input);
  },
};
