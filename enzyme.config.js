/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }]
*/
// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from "enzyme";
// eslint-disable-next-line import/no-extraneous-dependencies
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
