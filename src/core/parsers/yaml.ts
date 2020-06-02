import { Transformer } from "core/classes/transformer";

export async function parseYaml(input: string, transformer: Transformer) {
  const { loadModule } = transformer.utils;
  const { yamlToData, FileValue } = await loadModule("yaml");
  const parsedData = await yamlToData(input);

  async function resolveFiles(data: any) {
    if (typeof data !== "object" || data === null) {
      return data;
    }

    for (const key in data) {
      const value = data[key];

      if (value instanceof FileValue) {
        data[key] = await transformer.transform(value.path);
      } else {
        data[key] = await resolveFiles(data[key]);
      }
    }

    return data;
  }

  return resolveFiles(parsedData);
}
