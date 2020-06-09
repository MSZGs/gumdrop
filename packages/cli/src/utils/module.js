const modulePath = "@gumdrop/core/src/modules";

export async function loadModule(moduleName) {
  const module = await import(`${modulePath}/${moduleName}.js`);
  return module.default;
}
