import FileSystem from "fs-extra";

export async function fetchFile(path) {
  const rawFileContents = await FileSystem.readFile(path, "utf-8");

  return rawFileContents;
}
