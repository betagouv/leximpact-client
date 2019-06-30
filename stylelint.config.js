function bemSelector() {
    const block = "[a-z]*"
    const element = "(?:__[a-z]*)?"
    const modifier = "(?:--[a-z]*)?"
    const attribute = "(?:\\[.+\\])?"

    return new RegExp(`^\\.${block}${element}${modifier}${attribute}$`)
}

const config = {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-css-modules",
        "stylelint-config-prettier",
    ],
    plugins: ["stylelint-prettier", "stylelint-selector-bem-pattern"],
    rules: {
        "font-family-name-quotes": "always-unless-keyword",
        "function-url-quotes": "always",
        indentation: 4,
        "string-quotes": "double",
        "selector-attribute-quotes": "always",
        "prettier/prettier": [true, {}],
        "plugin/selector-bem-pattern": {
            implicitComponents: true,
            preset: "bem",
            componentSelectors: {
                initial: bemSelector,
            },
            ignoreCustomProperties: ".*",
        },
    },
}

module.exports = config
