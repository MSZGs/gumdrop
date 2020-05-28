export enum FileType {
  UNKNOWN,
  DATA,
  DOCUMENT,
}

export interface File {
  contents: string | null;
  data: object | null;
  type: FileType;
  path: string;
  extension: string;
}

export interface TransformUtils {
  resolvePath(rawPath: string): { path: string; extension: string };
  fetchFile(path: string): Promise<string>;
  loadModule(moduleName: string): Promise<any>;
  getParser(parserName: string): Promise<any>;
  processFile(path: string): Promise<string>;
}

export interface FileTransform {
  (file: File, utils: TransformUtils): Promise<void>;
}

export interface Module {}

export interface Parser {
  (input: string): Promise<any>;
}
