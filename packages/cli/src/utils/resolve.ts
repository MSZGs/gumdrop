const pathRegexp = /^(\/|\.\.?\/?)?(.+?)(\.(.+))?$/;

export function resolvePath(rawPath) {
  const [, prefix, file, , extension = "md"] = pathRegexp.exec(rawPath);

  return { path: `${file}.${extension}`, extension };
}
