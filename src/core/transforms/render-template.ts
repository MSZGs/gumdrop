import { File } from "core/classes/file";
import { Transformer } from "core/classes/transformer";

export async function renderTemplate(file: File, transformer: Transformer) {
  const { loadModule } = transformer.utils;
  const { renderMustache } = await loadModule("template");

  file.content = await renderMustache(file.content, file.data);
}
