export const FileType = {
  UNKNOWN: "unknown",
  DOCUMENT: "document",
  DATA: "data",
};

export class File {
  content = "";
  data = null;
  path = "";
  type = FileType.UNKNOWN;

  constructor(path) {
    this.path = path;
  }

  get basename() {
    return this.path.split("/").pop() || this.path;
  }

  get extension() {
    return this.basename.split(".").pop() || "";
  }

  get isDocument() {
    return this.type === FileType.DOCUMENT;
  }

  get isData() {
    return this.type === FileType.DATA;
  }

  get isDataParsed() {
    return typeof this.data === "object";
  }
}
