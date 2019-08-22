import Router from "next/router";

import showEnSavoirPlusPopin from "../popin-show-en-savoir-plus";

jest.mock("next/router", () => ({ push: jest.fn() }));

describe("components | actions | showEnSavoirPlusPopin", () => {
  describe("teste les appels de methode du router avec les bons arguments", () => {
    afterEach(() => {
      Router.push.mockClear();
    });

    it("doit avoir appeler la methode push du Router a l'ouverture de la popin 'en savoir plus'", () => {
      const expected = { type: null };
      const result = showEnSavoirPlusPopin();
      expect(result).toStrictEqual(expected);
      expect(Router.push).toHaveBeenCalledTimes(1);
      expect(Router.push).toHaveBeenCalledWith("/?popin=en-savoir-plus");
    });
  });
});
