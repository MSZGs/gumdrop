export async function loadFile({ file, utils }) {
  file.rawContent = await utils.fetchFile(file.path);

  if (file.isDocumentFile) {
    file.content = file.rawContent;
  } else if (file.isDataFile) {
    file.data = file.rawContent;
  }
}
