import { File } from "../classes/file.js";

export const markdownParser = {
  name: "markdown",
  extensions: ["md", "markdown"],
  type: File.Types.DOCUMENT,

  async parse({ input, utils }) {
    const { markdownToHtml } = await utils.loadModule("markdown");

    return markdownToHtml(input);
  },
};
