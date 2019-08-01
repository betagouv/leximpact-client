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

import showConnexionPopin from "../show-connexion-popin";

jest.mock("next/router", () => ({ push: jest.fn() }));

describe("components | actions | showConnexionPopin", () => {
  describe("teste les appels de methode du router avec les bons arguments", () => {
    afterEach(() => {
      Router.push.mockClear();
    });

    it("doit avoir appeler la methode push du Router a l'ouverture de la popin 'connection'", () => {
      showConnexionPopin();
      expect(Router.push).toHaveBeenCalledTimes(1);
      expect(Router.push).toHaveBeenCalledWith("/?popin=connection");
    });
  });
});