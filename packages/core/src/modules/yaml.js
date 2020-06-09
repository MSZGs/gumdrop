import Yaml from "yaml";

export default {
  async yamlToData(input, customTypes) {
    const customTags = customTypes.map(({ tag, Type }) => ({
      tag,
      identify: (value) => value instanceof Type,
      resolve: (document, cst) => {
        return new Type(cst.strValue);
      },
    }));

    return Yaml.parse(input, { customTags });
  },
};
