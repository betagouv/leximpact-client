import { createShallow } from "@material-ui/core/test-utils";

import { roles } from "../config.json";
import RolesInput from "../roles-input";

describe("components | connexion | roles-input", () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });
  describe("snapshot", () => {
    it("doit correspondre avec les props requises", () => {
      const props = { defaultValue: "depute", roles };
      const wrapper = shallow(<RolesInput {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
