/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
    max-nested-callbacks: [2, { "max": 4 }]
*/
import { createShallow } from "@material-ui/core/test-utils";

import EmailInput from "../email-input";

describe("components | login-form | email-input", () => {
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
