import { File, FileTransform, FileType, TransformUtils } from "core/types";

export class Transformer {
  private file: File;
  private utils: TransformUtils;
  private transforms: Array<FileTransform> = [];

  constructor(rawPath: string, utils: TransformUtils) {
    const { resolvePath } = utils;
    const { path, extension } = resolvePath(rawPath);

    this.utils = utils;
    this.file = {
      path: path,
      extension: extension,
      contents: null,
      data: null,
      type: FileType.UNKNOWN,
    };
  }

  addTransform(transform: FileTransform) {
    this.transforms.push(transform);
  }

  async applyTransforms() {
    for (const transform of this.transforms) {
      await transform(this.file, this.utils);
    }
  }

  getResult() {
    if (this.file.type === FileType.UNKNOWN) {
      return null;
    }

    if (this.file.type === FileType.DATA) {
      return this.file.data;
    }

    if (this.file.type === FileType.DOCUMENT) {
      return this.file.contents;
    }
  }
}
