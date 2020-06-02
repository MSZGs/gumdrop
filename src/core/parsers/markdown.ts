import { Transformer } from "core/classes/transformer";

export async function parseMarkdown(input: string, transformer: Transformer) {
  const { loadModule } = transformer.utils;
  const { markdownToHtml } = await loadModule("markdown");

  return markdownToHtml(input);
}
