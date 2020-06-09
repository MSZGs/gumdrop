import FileSystem from "fs-extra";

export async function fetchFile(path) {
  return await FileSystem.readFile(path, "utf-8");
}
