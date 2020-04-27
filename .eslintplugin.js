module.exports = {
  rules: {
    "no-material-root-imports": {
      create(context) {
        return {
          ImportDeclaration(node) {
            const path = node.source.value;
            const forbiddenImports = ["@material-ui/core", "@material-ui/icons"];
            // eslint-disable-next-line no-restricted-syntax
            for (const imp of forbiddenImports) {
              // The $ corresponds to the end of the sequence.
              const regex = new RegExp(`${imp}$`);
              if (regex.test(path)) {
                context.report(node, `Importing elements from ${imp} is forbidden. Use ${imp}/xxx instead.`);
              }
            }
          },
        };
      },
    },
  },
};
