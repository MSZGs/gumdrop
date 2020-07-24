export async function loadFile({ file, utils }) {
  file.rawContent = await utils.fetchFile(file.path);

  if (file.isDocument) {
    file.content = file.rawContent;
  } else if (file.isData) {
    file.data = file.rawContent;
  }
}
