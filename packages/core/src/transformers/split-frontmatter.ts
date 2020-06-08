import { TransformerParams } from "../processor";

const frontMatterRegexp = /^---[ \t]*\r?\n(.*?\r?\n|\r?\n)---[ \t]*\r?\n[ \r\n\t]*(.*)$/s;

export async function splitFrontmatter({ file }: TransformerParams) {
  if (typeof file.content !== "string") {
    return;
  }

  const match = frontMatterRegexp.exec(file.content);

  if (!match) {
    return;
  }

  const [, frontMatter, content] = match;
  file.data = frontMatter;
  file.content = content;
}
