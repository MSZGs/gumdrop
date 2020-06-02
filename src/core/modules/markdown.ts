import { render } from "extramark";

export default {
  async markdownToHtml(input: string) {
    return render(input);
  },
};
