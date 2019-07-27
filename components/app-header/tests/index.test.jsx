/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
    max-nested-callbacks: [2, { "max": 4 }]
*/
import { createShallow } from "@material-ui/core/test-utils";

import HeaderContainer from "../index";

describe("components | app-header | index", () => {
  let shallow;
  beforeAll(() => {
    const options = { dive: true };
    shallow = createShallow(options);
  });

  describe("snapshot", () => {
    it("doit correspondre quand l'user n'est pas connecté", () => {
      const props = { isUserLogged: false };
      const wrapper = shallow(<HeaderContainer {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });

    it("doit correspondre quand l'user est connecté", () => {
      const props = { isUserLogged: true };
      const wrapper = shallow(<HeaderContainer {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
