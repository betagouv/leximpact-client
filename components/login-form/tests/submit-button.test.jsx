/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
    max-nested-callbacks: [2, { "max": 4 }]
*/
import { createShallow } from "@material-ui/core/test-utils";

import SubmitButton from "../submit-button";

describe("components | login-form | submit-button", () => {
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
