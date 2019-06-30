function babelConfig(api) {
    api.cache(true)

    const presets = [
        [
            "@babel/preset-env",
            {
                targets: {
                    browsers: ["> 1%", "last 4 versions"],
                    node: 8,
                },
            },
        ],
        ["@babel/preset-flow"],
        ["next/babel"],
    ]

    const plugins = [
        ["@babel/plugin-proposal-pipeline-operator", { proposal: "minimal" }],
        ["flow-react-proptypes"],
        ["lodash"],
        [
            "module-resolver",
            {
                extensions: [".js", ".jsx", ".scss"],
                alias: {
                    components: "./components",
                    pages: "./pages",
                    styles: "./styles",
                },
            },
        ],
        ["wrap-in-js", { extensions: ["scss$"] }],
    ]

    return {
        presets,
        plugins,
    }
}

module.exports = babelConfig
