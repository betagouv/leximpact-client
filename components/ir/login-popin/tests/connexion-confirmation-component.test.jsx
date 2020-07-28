import { createShallow } from "@material-ui/core/test-utils";

import LoginPopinComponent from "../login-popin-component";

describe("components | login-popin-component", () => {
  let shallow;
  beforeAll(() => {
    const options = { dive: true };
    shallow = createShallow(options);
  });

  describe("snapshot", () => {
    it("doit correspondre quand le token est dans l'url", () => {
      const props = {
        handleUpdateConnexionToken: jest.fn(),
        onClosePopin: jest.fn(),
        token: "any-string",
      };
      const wrapper = shallow(<LoginPopinComponent {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
