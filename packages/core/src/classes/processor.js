import { File } from "./file.js";

export class Processor {
  transformers = [];

  addTransformer(transformer) {
    this.transformers.push(transformer);

    return this;
  }

  async process(rawPath, utils) {
    const path = utils.resolvePath(rawPath);
    const file = new File(path);

    for (const transformer of this.transformers) {
      await transformer({ file, utils, processor: this });
    }

    return file.isDataFile ? file.data : file.content;
  }
}
