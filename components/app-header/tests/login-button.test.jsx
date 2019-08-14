/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    max-nested-callbacks: [2, { "max": 4 }],
    react/jsx-closing-bracket-location: [2, {
        "nonEmpty": false,
        "selfClosing": false
    }],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"]
    }],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }]
*/
import { createShallow } from "@material-ui/core/test-utils";

import LoginButton from "../login-button";
import { showConnexionPopin } from "../../actions/routing";

const MockButtonClickHandler = jest.fn();
jest.mock("next/router", () => ({ push: jest.fn() }));
jest.mock("../../actions/routing", () => ({
  showConnexionPopin: jest.fn(),
}));

describe("components | app-header | index", () => {
  let shallow = null;
  beforeAll(() => {
    MockButtonClickHandler.mockClear();
    const options = { dive: true };
    shallow = createShallow(options);
  });

  describe("snapshot", () => {
    it("doit correspondre au snapshot existant", () => {
      const props = {};
      const wrapper = shallow(<LoginButton {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("render", () => {
    it("au click sur le bouton on doit avoir appeler la methode showConnexionPopin", () => {
      const props = {};
      const wrapper = shallow(<LoginButton {...props} />);
      wrapper.simulate("click");
      expect(showConnexionPopin).toHaveBeenCalledTimes(1);
    });
  });
});
