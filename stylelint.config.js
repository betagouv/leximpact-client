function toUpperCase(_match, _p1, p2) {
    return p2.toUpperCase()
}

function toTitleCase(callback) {
    return component => component.replace(/(-|^)([^-]?)/g, callback)
}

function bemSelector(component) {
    const block = toTitleCase(toUpperCase)(component)
    const element = "(?:_[a-z][a-zA-Z0-9]*)?"
    const modifier = "(?:___[a-z][a-zA-Z0-9]*)?"
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
