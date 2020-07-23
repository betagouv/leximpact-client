import { createShallow } from "@material-ui/core/test-utils";

import { showEnSavoirPlusPopin } from "../../../../redux/actions";
import HeaderMenuButton from "../menu-button";

const MockButtonClickHandler = jest.fn();
jest.mock("next/router", () => ({ push: jest.fn() }));
jest.mock("../../../../redux/actions", () => ({
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
