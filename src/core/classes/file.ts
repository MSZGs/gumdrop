export class File {
  public content: object | string | null = null;
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
