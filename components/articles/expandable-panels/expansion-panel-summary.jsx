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
import { ExpansionPanelSummary } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const LexExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0,0,0,0)",
    borderBottom: "0px solid rgba(0,0,0,.125)",
    marginBottom: -1,
    minHeight: 32,
    "&$expanded": {
      minHeight: 20,
    },
  },
  content: {
    "&$expanded": {
      margin: "3px 0",
      padding: "1px",
    },
  },
  expanded: {},
})(props => <ExpansionPanelSummary {...props} />);

LexExpansionPanelSummary.muiName = "ExpansionPanelSummary";

export default LexExpansionPanelSummary;
