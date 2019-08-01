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
import { ExpansionPanel } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const LexExpansionPanel = withStyles({
  root: {
    border: "0px solid rgba(0,0,0,.125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  },
  expanded: {
    margin: "auto",
    padding: "1px",
  },
})(ExpansionPanel);

export default LexExpansionPanel;
