import { createShallow } from "@material-ui/core/test-utils";

import AddHeader from "../AppHeader";

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
    it("doit correspondre quand l'user n'est pas connecté en mode desktop", () => {
      const props = { isUserLogged: false, useMobileView: false };
      const wrapper = shallow(<AddHeader {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });

    it("doit correspondre quand l'user n'est pas connecté en mode mobile", () => {
      const props = { isUserLogged: false, useMobileView: true };
      const wrapper = shallow(<AddHeader {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });

    it("doit correspondre quand l'user est connecté en mode desktop", () => {
      const props = { isUserLogged: true, useMobileView: true };
      const wrapper = shallow(<AddHeader {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });

    it("doit correspondre quand l'user est connecté en mode mobile", () => {
      const props = { isUserLogged: true, useMobileView: true };
      const wrapper = shallow(<AddHeader {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
