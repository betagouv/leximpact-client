import { createShallow } from "@material-ui/core/test-utils";

import MentionsLegales from "../index";

describe("components | app-header | index", () => {
  let shallow;
  beforeAll(() => {
    const options = { dive: true };
    shallow = createShallow(options);
  });

  describe("snapshot", () => {
    it("doit correspondre quand l'user n'est pas connecté", () => {
      const props = {};
      const wrapper = shallow(<MentionsLegales {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
