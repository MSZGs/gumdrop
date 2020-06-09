const pathRegexp = /^(\/|\.\.?\/?)?(.+?)(\.(.+))?$/;

export function resolvePath(rawPath) {
  const [, prefix, file, , extension = "md"] = pathRegexp.exec(rawPath);

  return `${file}.${extension}`;
}
