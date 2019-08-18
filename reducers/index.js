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
import { combineReducers } from "redux";

import casTypes from "./cas-types";
import loading from "./loading";
import reformeBase from "./reforme-base";
import resBrut from "./res-brut";
import currentExpandedArticlePanel from "./current-expanded-article-panel";

export default combineReducers({
  casTypes,
  loading,
  reformeBase,
  resBrut,
  currentExpandedArticlePanel,
});
