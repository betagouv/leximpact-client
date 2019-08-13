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
import { ExpansionPanelDetails } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const LexExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(ExpansionPanelDetails);

export default LexExpansionPanelDetails;
