import { CST, Document, parse } from "yaml";

type YamlType = new (value: string) => any;
type YamlCustomTag = { tag: string; Type: YamlType };
type YamlCustomTagList = Array<YamlCustomTag>;

export default {
  async yamlToData(input: string, customTypes: YamlCustomTagList) {
    const customTags = customTypes.map(({ tag, Type }) => ({
      tag,
      identify: (value: any) => value instanceof Type,
      resolve: (document: Document, cst: CST.Node) => new Type(cst.value),
    }));

    return parse(input, { customTags });
  },
};
