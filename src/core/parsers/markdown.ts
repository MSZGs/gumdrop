import { Transformer } from "core/classes/transformer";

export async function parseMarkdown(input: string, transformer: Transformer) {
  const { loadModule } = transformer.utils;
  const { parse } = await loadModule("markdown");

  return parse(input);
}
