import { File } from "core/classes/file";

export interface TransformUtils {
  resolvePath(rawPath: string): string;
  fetchFile(path: string): Promise<string>;
  loadModule(moduleName: string): Promise<any>;
}

export interface Transform {
  (file: File, transformer: Transformer): Promise<void>;
}

export class Transformer {
  public utils: TransformUtils;
  public transforms: Array<Transform> = [];

  public constructor(utils: TransformUtils) {
    this.utils = utils;
  }

  public addTransform(transform: Transform) {
    this.transforms.push(transform);

    return this;
  }

  public async transform(rawPath: string) {
    const path = this.utils.resolvePath(rawPath);
    const file = new File(path);

    for (const transform of this.transforms) {
      await transform(file, this);
    }
  }
}
