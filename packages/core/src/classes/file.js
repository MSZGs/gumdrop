export class File {
  static Types = {
    UNKNOWN: "unknown",
    DOCUMENT: "document",
    DATA: "data",
  };

  path = "";
  type = File.Types.UNKNOWN;
  rawContent = "";
  content = null;
  data = null;

  isDataParsed = false;
  isContentParsed = false;

  constructor(path) {
    this.path = path;
  }

  get basename() {
    return this.path.split("/").pop() || this.path;
  }

  get extension() {
    return this.basename.split(".").pop() || "";
  }

  get isDocumentFile() {
    return this.type === File.Types.DOCUMENT;
  }

  get isDataFile() {
    return this.type === File.Types.DATA;
  }

  get hasContent() {
    return this.isDocumentFile && this.content !== null;
  }

  get hasData() {
    return this.data !== null;
  }
}
