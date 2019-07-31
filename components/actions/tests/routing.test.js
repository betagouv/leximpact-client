/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
    max-nested-callbacks: [2, { "max": 4 }],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }]
*/
import Router from "next/router";

import { showEnSavoirPlusPopin } from "../routing";

const MockRouterPush = jest.fn();
jest.mock("next/router", () => ({ push: jest.fn() }));

describe("components | actions | routing", () => {
  describe("teste les appels de methode du router avec les bons arguments", () => {
    it("doit avoir appeler la methode push du Router", () => {
      MockRouterPush.mockClear();
      showEnSavoirPlusPopin();
      expect(Router.push).toHaveBeenCalledTimes(1);
      expect(Router.push).toHaveBeenCalledWith(
        "/?showPopin=en-savoir-plus",
        "/en-savoir-plus",
      );
    });
  });
});
