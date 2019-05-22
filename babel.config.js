module.exports = (api) => {
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
                alias: {
                    components: "./components",
                    lib: "./lib",
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
