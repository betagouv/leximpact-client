import { createShallow } from "@material-ui/core/test-utils";

import AppHeaderComponent from "../app-header-component";

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
      const props = { isUserConnected: false };
      const wrapper = shallow(<AppHeaderComponent {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });

    it("doit correspondre quand l'user est connecté", () => {
      const props = { isUserConnected: true };
      const wrapper = shallow(<AppHeaderComponent {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
