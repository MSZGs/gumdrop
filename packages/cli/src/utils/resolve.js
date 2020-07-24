const pathRegexp = /^(\/|\.\.?\/?)?(.+?)(\.(.+))?$/;

export function resolvePath(rawPath) {
  const [, prefix, basename, , extension = "md"] = pathRegexp.exec(rawPath);

  return `${basename}.${extension}`;
}
