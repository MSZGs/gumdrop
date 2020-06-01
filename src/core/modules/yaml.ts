import { CST, Document, Options, parse } from "yaml";
import { Schema } from "yaml/types";

const fileTag: Schema.Tag = {
  tag: "!file",
  identify(value: any) {
    return value instanceof FileValue;
  },
  resolve(document: Document, cst: CST.Node) {
    return new FileValue(cst.value || "");
  },
};

const options: Options = {
  customTags: [fileTag],
};

export class FileValue {
  public path: string;

  constructor(path: string) {
    this.path = path;
  }
}

export default {
  async parse(input: string) {
    return parse(input, options);
  },
};
