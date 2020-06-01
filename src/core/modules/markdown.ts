import { render } from "extramark";

export default {
  async parse(input: string) {
    return render(input);
  },
};
