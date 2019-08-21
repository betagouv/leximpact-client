import { createShallow } from "@material-ui/core/test-utils";

import LoginForm from "../index";

describe("components | connexion | index", () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });

  describe("snapshot", () => {
    it("doit correspondre avec les props requises", () => {
      const props = {};
      const wrapper = shallow(<LoginForm {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
