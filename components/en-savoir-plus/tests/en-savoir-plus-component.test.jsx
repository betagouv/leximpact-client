import { createShallow } from "@material-ui/core/test-utils";

import EnSavoirPlusComponent from "../en-savoir-plus-component";

describe("components | en-savoir-plus-component", () => {
  let shallow;
  beforeAll(() => {
    const options = { dive: true };
    shallow = createShallow(options);
  });

  describe("snapshot", () => {
    it("doit correspondre avec les props obligatoires", () => {
      const props = {
        onClosePopin: jest.fn(),
      };
      const wrapper = shallow(<EnSavoirPlusComponent {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
