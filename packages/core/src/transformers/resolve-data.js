import { File } from "../classes/file.js";

export async function resolveData({ file, utils, processor }) {
  if (!file.isDocument) {
    return;
  }

  async function resolveValue(data) {
    if (typeof data !== "object" || data === null) {
      return data;
    }

    if (data instanceof File) {
      return await processor.process(data.path, utils);
    }

    for (const key in data) {
      data[key] = await resolveValue(data[key]);
    }

    return data;
  }

  file.data = await resolveValue(file.data);
}
