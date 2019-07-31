/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  import/order: [2, {
    newlines-between: "always",
    groups: ["builtin", "external", "parent", "sibling", "index"]
  }],
  implicit-arrow-linebreak: [2, "below"]
*/

/* --------------------------------------------------------
//
//
// !!! A utiliser uniquement dans les cas:
// - de redirection sur une page particuliere
// - ou d'affichage de popin sur une page particuliere depuis l'URL
// Ex: la popin de confirmation d'enregistrement
//
//
-------------------------------------------------------- */

const externalDynamicExpressJSRoutes = {
  // Routes externes à l'application utilisées par server.js
  // Ces routes ont besoin d'un parametre dynamique pour fonctionner
  "/connection/:token": {
    page: "/",
    query: req =>
      ({
        token: req.params.token,
        showPopin: "confirmation-connexion",
      }),
  },
};

const internalStaticNextJSRoutes = {
  // Routes internes à l'application utilisées par next.config.js
  // Ces routes ne peuvent pas comporter des parametres
  "/en-savoir-plus": {
    page: "/",
    query: { showPopin: "en-savoir-plus" },
  },
};

module.exports = { externalDynamicExpressJSRoutes, internalStaticNextJSRoutes };
