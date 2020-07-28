import formatNumber from "../format-number";

describe("formatNumber", () => {
  test("should convert numbers to strings.", () => {
    const expected = "24";
    const actual = formatNumber(24);

    expect(typeof actual).toBe("string");
    expect(actual).toBe(expected);
  });

  test("should handle negative zeros.", () => {
    const expected = "0";
    const actual = formatNumber(-0);

    expect(actual).toBe(expected);
  });

  test("should use commas for decimals.", () => {
    const expected = "0,78";
    const actual = formatNumber(0.78);

    expect(actual).toBe(expected);
  });

  test("should separate thousands with spaces.", () => {
    const expected = "1 000 000";
    const actual = formatNumber(1000000);

    expect(actual).toBe(expected);
  });
});
