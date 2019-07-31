/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    max-nested-callbacks: [2, { "max": 4 }],
    react/jsx-closing-bracket-location: [2, {
        "nonEmpty": false,
        "selfClosing": false
    }],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"]
    }],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }]
*/
export const renderApplicationPageFromServer = (
  routeObject,
  nextApplication,
) => (req, res) => {
  const { page, query } = routeObject;
  nextApplication.render(req, res, page, query(req));
};

export const generateServerDynamicRoutes = (
  nextApplication,
  expressServer,
  dynamicRoutes,
) => {
  // Génére les routes côté server ExpressJS
  // Cela permet de récupérer par exemple un token dans l'URL
  // Et d'afficher la popin de confirmation d'enregistrement
  Object.keys(dynamicRoutes).forEach((routePath) => {
    const routeObject = dynamicRoutes[routePath];
    const callback = renderApplicationPageFromServer(
      routeObject,
      nextApplication,
    );
    expressServer.get(routePath, callback);
  });
};
