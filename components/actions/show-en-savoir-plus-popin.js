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

const showEnSavoirPlusPopin = () => {
  Router.push("/?popin=en-savoir-plus");
};

export default showEnSavoirPlusPopin;
