export async function loadFile({ file, utils }) {
  const fileContent = await utils.fetchFile(file.path);

  if (file.isDocument) {
    file.content = fileContent;
  } else if (file.isData) {
    file.data = fileContent;
  }
}
