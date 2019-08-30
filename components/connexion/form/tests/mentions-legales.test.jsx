import { createShallow } from "@material-ui/core/test-utils";

import MentionsLegales from "../mentions-legales-text";

describe("components | connexion | mentions-legales-text", () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });
  describe("snapshot", () => {
    it("doit correspondre avec les props requises", () => {
      const props = { classes: {} };
      const wrapper = shallow(<MentionsLegales {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
