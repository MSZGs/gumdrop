export const enum FileType {
  UNKNOWN,
  DATA,
  DOCUMENT,
}

export class File {
  public contents: string = "";
  public data: object | string | null = null;
  public path: string;

  public constructor(path: string) {
    this.path = path;
  }

  public get basename() {
    return this.path.split("/").pop() || this.path;
  }

  public get extension() {
    if (!this.basename.includes(".")) {
      return "";
    }

    return this.basename.split(".").pop() || "";
  }
}
