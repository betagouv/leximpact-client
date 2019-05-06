module.exports = (api) => {
    api.cache(true)

    const presets = [
        "@babel/preset-flow",
        "next/babel",
    ]

    const plugins = [
        ["@babel/plugin-proposal-pipeline-operator", { proposal: "minimal" }],
        ["flow-react-proptypes"],
        [
            "module-resolver", {
                alias: {
                    components: "./app/components",
                    lib: "./app/lib",
                    pages: "./app/pages",
                    styles: "./app/styles",
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
