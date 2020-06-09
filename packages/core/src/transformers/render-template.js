export async function renderTemplate({ file, utils }) {
  if (!file.isDocument) {
    return;
  }

  const { renderMustache } = await utils.loadModule("mustache");

  file.content = await renderMustache(file.content, file.data);
}
