import { createShallow } from "@material-ui/core/test-utils";

import LoginButton from "../login-button";
import { showConnexionPopin } from "../../actions";

const MockButtonClickHandler = jest.fn();
jest.mock("next/router", () => ({ push: jest.fn() }));
jest.mock("../../actions", () => ({
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
