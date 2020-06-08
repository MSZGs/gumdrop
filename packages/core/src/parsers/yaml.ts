import { ParserParams } from "parsers";

export async function parseYaml({ input, utils, processor }: ParserParams) {
  const { loadModule } = utils;
  const { yamlToData, FileValue } = await loadModule("yaml");

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

  const parsedData = await yamlToData(input);
  return resolveFiles(parsedData);
}
