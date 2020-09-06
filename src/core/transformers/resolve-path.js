export async function resolvePath({ file, utils }) {
  file.path = utils.resolvePath(file.path);
}
