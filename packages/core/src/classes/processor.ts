import { File } from "./file";

export interface ProcessorUtils {
  resolvePath(rawPath: string): string;
  fetchFile(path: string): Promise<string>;
  loadModule(moduleName: string): Promise<any>;
}

export interface TransformerParams {
  file: File;
  utils: ProcessorUtils;
  processor: Processor;
}

export interface Transformer {
  (params: TransformerParams): Promise<void>;
}

export class Processor {
  public transformers: Array<Transformer> = [];

  public addTransformer(transform: Transformer) {
    this.transformers.push(transform);

    return this;
  }

  public async process(rawPath: string, utils: ProcessorUtils) {
    const path = utils.resolvePath(rawPath);
    const file = new File(path);

    for (const transformer of this.transformers) {
      await transformer({ file, utils, processor: this });
    }
  }
}
