import Router from "next/router";

import showAddCasTypesPopin from "../popin-cas-types-add";

jest.mock("next/router", () => ({ push: jest.fn() }));

describe("components | actions | showAddCasTypesPopin", () => {
  describe("teste les appels de methode du router avec les bons arguments", () => {
    afterEach(() => {
      Router.push.mockClear();
    });

    it("doit avoir appeler la methode push du Router a l'ouverture de la popin 'en savoir plus'", () => {
      const expected = { type: null };
      const result = showAddCasTypesPopin();
      expect(result).toStrictEqual(expected);
      expect(Router.push).toHaveBeenCalledTimes(1);
      expect(Router.push).toHaveBeenCalledWith("/?popin=ajouter-carte-impact");
    });
  });
});
