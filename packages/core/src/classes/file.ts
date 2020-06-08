export enum FileType {
  DOCUMENT = "document",
  DATA = "data",
}

export class File {
  public content: string = "";
  public data: object | string | null = null;
  public path: string;
  public type: FileType;

  public constructor(path: string) {
    this.path = path;
  }

  public get basename() {
    return this.path.split("/").pop() || this.path;
  }

  public get extension() {
    return this.basename.split(".").pop() || "";
  }

  public get isDocument() {
    return this.type === FileType.DOCUMENT;
  }

  public get isData() {
    return this.type === FileType.DATA;
  }
}
