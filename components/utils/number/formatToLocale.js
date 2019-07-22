/* eslint semi: [2, "always"] */
const LOCALE = "fr";

function replaceCommaWithSpace(value) {
    const isCommaSplittedNumber = value.indexOf(",") !== 1;
    if (!isCommaSplittedNumber) return value;
    return value.split(",").join(" ");
}

function replaceDotWithComma(value) {
    const isDotSplittedNumber = value.indexOf(".") !== 1;
    if (!isDotSplittedNumber) return value;
    return value.split(".").join(",");
}

function formatToLocale(number) {
    const value = number;
    const isValid = typeof value === "number" && !Number.isNaN(value);
    if (!isValid) return number;
    let result = Intl.NumberFormat(LOCALE).format(value);
    result = replaceCommaWithSpace(result);
    result = replaceDotWithComma(result);
    return result;
}

export default formatToLocale;
