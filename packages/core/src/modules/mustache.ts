import { render } from "mustache";

export default {
  async renderMustache(input: string, data: any) {
    return render(input, data);
  },
};
