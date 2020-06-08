import { ParserParams } from "parsers";
import { FileType, File } from "classes/file";

export const yamlParser = {
  name: "yaml",
  extensions: ["yaml", "yml"],
  type: FileType.DATA,
  async parse({ input, utils }: ParserParams) {
    const { yamlToData } = await utils.loadModule("yaml");
    const fileTag = { tag: "!file", Type: File };

    return yamlToData(input, [fileTag]);
  },
};
