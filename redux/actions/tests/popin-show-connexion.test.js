import Router from "next/router";

import showConnexionPopin from "../popin-show-connexion";

jest.mock("next/router", () => ({ push: jest.fn() }));

describe("components | actions | showConnexionPopin", () => {
  describe("teste les appels de methode du router avec les bons arguments", () => {
    afterEach(() => {
      Router.push.mockClear();
    });

    it("doit avoir appeler la methode push du Router a l'ouverture de la popin 'connection'", () => {
      const expected = { type: "showConnexionPopin" };
      const result = showConnexionPopin();
      expect(result).toStrictEqual(expected);
      expect(Router.push).toHaveBeenCalledTimes(1);
      expect(Router.push).toHaveBeenCalledWith("/?popin=connection");
    });
  });
});
