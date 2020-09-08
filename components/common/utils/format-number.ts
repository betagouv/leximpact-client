function formatNumber(
  number: number, options: { decimals?: number, sign?: boolean } = {},
): string {
  if (options.decimals !== undefined) {
    const factor = 10 ** options.decimals;
    // eslint-disable-next-line no-param-reassign
    number = Math.round(number * factor) / factor;
  }
  const result = number
    .toString()
    .replace(".", ",")
    // https://stackoverflow.com/a/32013016/3942056
    // (?=pattern) is the lookahead, \d{3} is 3 digits, and (pattern)+ meansrepeat the
    // last pattern one or more times (greedily) until a the end of the String $
    .replace(/(\d)(?=(\d{3})+$)/g, "$1 ");

  if (options.sign && number > 0) {
    return `+${result}`;
  }

  return result;
}

export default formatNumber;
