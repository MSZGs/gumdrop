import { TransformerParams } from "classes/processor";

export async function resolvePath({ file, utils }: TransformerParams) {
  file.path = utils.resolvePath(file.path);
}
