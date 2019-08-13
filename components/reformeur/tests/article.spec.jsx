/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
    max-nested-callbacks: [2, { "max": 4 }]
*/
import { shallow } from "enzyme";

import Article from "../article";
import ReformeDefaultData from "../reforme-default-data";

describe("components | reformeur | article", () => {
  describe("snapshot", () => {
    it("doit correspondre avec les props requises", () => {
      const props = {
        reforme: ReformeDefaultData,
        reformebase: ReformeDefaultData,
        onChange: jest.fn(),
        addTranche: jest.fn(),
        removeTranche: jest.fn(),
      };
      const wrapper = shallow(<Article {...props} />);
      expect(wrapper).toBeDefined();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
