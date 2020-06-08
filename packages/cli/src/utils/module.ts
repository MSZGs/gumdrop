const modulePath = "@gumdrop/core/modules";

export async function loadModule(moduleName: string) {
  return import(`${modulePath}/${moduleName}/index.js`);
}
