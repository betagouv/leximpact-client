import { createShallow } from "@material-ui/core/test-utils";

import HeaderContainer from "../index";

const CURRENT_NODE_ENV = process.env;

describe("components | app-header | index", () => {
  let shallow;
  beforeAll(() => {
    jest.resetModules();
    process.env = { ...CURRENT_NODE_ENV };
    delete process.env.NODE_ENV;

    const options = { dive: true };
    shallow = createShallow(options);
  });

  afterAll(() => {
    process.env = CURRENT_NODE_ENV;
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
