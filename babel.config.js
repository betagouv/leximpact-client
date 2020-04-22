function babelConfig(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          node: 8,
        },
      },
    ],
    ["next/babel"],
  ];

  return {
    presets,
  };
}

module.exports = babelConfig;
