/* eslint semi: [2, "always"], max-nested-callbacks: [2, { "max": 3 }] */
import formatToLocale from "../formatToLocale";

describe("components | utils | number | formatToLocale", () => {
    describe("si la valeur n'est pas un nombre", () => {
        it("retourne la valeur sans modifications", () => {
            let given = "123not a number";
            let result = formatToLocale(given);
            expect(result).toStrictEqual(given);

            given = ["not a number"];
            result = formatToLocale(given);
            expect(result).toStrictEqual(given);

            given = " 1234,12 ";
            result = formatToLocale(given);
            expect(result).toStrictEqual(given);

            given = "10000000.42";
            result = formatToLocale(given);
            expect(result).toStrictEqual(given);

            given = Number.NaN;
            result = formatToLocale(given);
            expect(result).toStrictEqual(given);
        });
    });

    describe("si la valeur est un nombre", () => {
        it("retourne une string égal à 100", () => {
            const result = formatToLocale(100);
            expect(result).toStrictEqual("100");
        });

        it("retourne une string égale à 10 000", () => {
            const given = 10000;
            const result = formatToLocale(given);
            expect(result).toStrictEqual("10 000");
        });

        it("retourne une string égale à 10 000,42", () => {
            const result = formatToLocale(10000.42);
            expect(result).toStrictEqual("10 000,42");
        });
    });
});
