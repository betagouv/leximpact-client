/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  react/jsx-indent: [2, 2,{indentLogicalExpressions: false}],
  react/jsx-indent-props: [2, 2],
  import/order: [2, {
    newlines-between: "always",
    groups: ["builtin", "external", "parent", "sibling", "index"]
  }]
*/
import Router from "next/router";

export function showEnSavoirPlusPopin() {
  Router.push("/?showPopin=en-savoir-plus", "/en-savoir-plus");
}

export function closeCurrentOpenedRoutingPopin() {
  Router.push("/");
}
