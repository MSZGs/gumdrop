const modulePath = "../../src/core/modules";

export async function loadModule(moduleName) {
  const module = await import(`${modulePath}/${moduleName}.js`);

  return module.default;
}
