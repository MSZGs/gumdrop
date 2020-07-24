import { File } from "../classes/file.js";

export const yamlParser = {
  name: "yaml",
  extensions: ["yaml", "yml"],
  type: File.Types.DATA,

  async parse({ input, utils }) {
    const { yamlToData } = await utils.loadModule("yaml");
    const fileTag = { tag: "!file", Type: File };

    return yamlToData(input, [fileTag]);
  },
};
