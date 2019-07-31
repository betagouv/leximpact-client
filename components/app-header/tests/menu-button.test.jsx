/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
    max-nested-callbacks: [2, { "max": 4 }]
*/
import { createShallow } from "@material-ui/core/test-utils";

import HeaderMenuButton from "../menu-button";
import { showEnSavoirPlusPopin } from "../../actions/routing";

const MockButtonClickHandler = jest.fn();
jest.mock("next/router", () => ({ push: jest.fn() }));
jest.mock("../../actions/routing", () => ({
  showEnSavoirPlusPopin: jest.fn(),
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
      const wrapper = shallow(<HeaderMenuButton {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("render", () => {
    it("au click sur le bouton on doit avoir appeler la methode showEnSavoirPlusPopin", () => {
      const props = {};
      const wrapper = shallow(<HeaderMenuButton {...props} />);
      wrapper.simulate("click");
      expect(showEnSavoirPlusPopin).toHaveBeenCalledTimes(1);
    });
  });
});