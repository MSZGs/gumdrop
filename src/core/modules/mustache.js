import Mustache from "mustache";

export default {
  async renderMustache(input, data) {
    return Mustache.render(input, data);
  },
};
