import { createShallow } from "@material-ui/core/test-utils";

import ConnexionConfirmationComponent from "../connexion-confirmation-component";

describe("components | connexion-confirmation-component", () => {
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
      const wrapper = shallow(<ConnexionConfirmationComponent {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
