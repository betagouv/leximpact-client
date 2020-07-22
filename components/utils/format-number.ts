const formatNumber = (number: number, options: { decimals?: number } = {}): string => {
  if (options.decimals !== undefined) {
    const factor = Math.pow(10, options.decimals);
    number = Math.round(number * factor) / factor;
  }
  return number
    .toString()
    .replace(".", ",")
    // https://stackoverflow.com/a/32013016/3942056
    // (?=pattern) is the lookahead, \d{3} is 3 digits, and (pattern)+ meansrepeat the
    // last pattern one or more times (greedily) until a the end of the String $
    .replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
}  

export default formatNumber;
