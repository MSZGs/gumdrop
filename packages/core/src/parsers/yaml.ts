import { ParserParams } from "parsers";
import { FileType } from "classes/file";

export const yamlParser = {
  name: "yaml",
  extensions: ["yaml", "yml"],
  type: FileType.DATA,
  async parse({ input, utils, processor }: ParserParams) {
    async function resolveFiles(data: any) {
      if (typeof data !== "object" || data === null) {
        return data;
      }

      for (const key in data) {
        const value = data[key];

        if (value instanceof FileValue) {
          data[key] = await processor.process(value.path, utils);
        } else {
          data[key] = await resolveFiles(data[key]);
        }
      }

      return data;
    }

    const { yamlToData, FileValue } = await utils.loadModule("yaml");
    const parsedData = await yamlToData(input);
    return resolveFiles(parsedData);
  },
};
