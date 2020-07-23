import { createShallow } from "@material-ui/core/test-utils";

import EmailInput from "../email-input";

describe("components | connexion | email-input", () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });
  describe("snapshot", () => {
    it("doit correspondre avec les props requises", () => {
      const props = {
        domains: ["@any-domain"],
      };
      const wrapper = shallow(<EmailInput {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
