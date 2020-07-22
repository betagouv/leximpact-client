import fillArrayWith from "../fillArrayWith";

describe("utils | array | fillArrayWith", () => {
  it("retourne un array de 0 à 12", () => {
    const length = 12;
    const result = fillArrayWith(length);
    expect(result.length).toEqual(length);
    expect(result[0]).toEqual(0);
    expect(result[5]).toEqual(5);
    expect(result[result.length - 1]).toEqual(11);
  });

  it("retourne un array vide", () => {
    const length = 0;
    const result = fillArrayWith(length);
    expect(result.length).toEqual(length);
    expect(result[0]).toEqual(undefined);
    expect(result[result.length - 1]).toEqual(undefined);
  });
});
