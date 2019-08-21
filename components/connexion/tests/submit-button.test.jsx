import { createShallow } from "@material-ui/core/test-utils";

import SubmitButton from "../submit-button";

describe("components | connexion | submit-button", () => {
  let shallow;
  beforeAll(() => {
    shallow = createShallow();
  });
  describe("snapshot", () => {
    it("correspond a l'etat normal", () => {
      const props = {
        disabled: false,
        isLoading: false,
      };
      const wrapper = shallow(<SubmitButton {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });

    it("correspond a l'etat disabled", () => {
      const props = {
        disabled: true,
        isLoading: false,
      };
      const wrapper = shallow(<SubmitButton {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });

    it("correspond a l'etat loading", () => {
      const props = {
        disabled: false,
        isLoading: true,
      };
      const wrapper = shallow(<SubmitButton {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
