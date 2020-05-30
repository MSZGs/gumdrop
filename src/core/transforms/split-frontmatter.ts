import { Transformer } from "core/classes/transformer";
import { FileType } from "core/classes/file";

const frontMatterRegexp = /^---[ \t]*\r?\n(.*?\r?\n|\r?\n)---[ \t]*\r?\n[ \r\n\t]*(.*)$/s;

export async function splitFrontmatter({ file, parser }: Transformer) {
  if (parser.type !== FileType.DOCUMENT) {
    return;
  }

  const match = frontMatterRegexp.exec(file.contents);

  if (!match) {
    return;
  }

  const [, frontMatter, contents] = match;
  file.data = frontMatter || null;
  file.contents = contents;
}
