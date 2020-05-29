import { Parsers, Parser } from "config/parsers";
import { File, FileType } from "core/classes/file";

export interface TransformUtils {
  resolvePath(rawPath: string): string;
  fetchFile(path: string): Promise<string>;
  loadModule(moduleName: string): Promise<any>;
}

export interface Transform {
  (transformer: Transformer): Promise<void>;
}

export class Transformer {
  public file: File;
  public utils: TransformUtils;
  public parser: Parser = Parsers.TEXT;
  private transforms: Array<Transform> = [];

  public constructor(rawPath: string, utils: TransformUtils) {
    const { resolvePath } = utils;
    const path = resolvePath(rawPath);

    this.utils = utils;
    this.file = new File(path);

    const parser = Object.values(Parsers).find((parser) =>
      parser.extensions.includes(this.file.extension)
    );

    if (parser) {
      this.setParser(parser);
    }
  }

  public addTransform(transform: Transform) {
    this.transforms.push(transform);
  }

  public async applyTransforms() {
    for (const transform of this.transforms) {
      await transform(this);
    }
  }

  public getResult() {
    if (this.parser.type === FileType.UNKNOWN) {
      return null;
    }

    if (this.parser.type === FileType.DATA) {
      return this.file.data;
    }

    if (this.parser.type === FileType.DOCUMENT) {
      return this.file.contents;
    }
  }

  private setParser(parser: Parser) {
    this.parser = parser;

    if (this.parser.type === FileType.DATA) {
      this.file.data = this.file.contents;
      this.file.contents = null;
    }
  }
}
