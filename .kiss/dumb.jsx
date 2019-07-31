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
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"

const styles = {
  container: {},
}

function MyComponent({ classes }) {
  return <div className={classes.container} />
}

MyComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
}

export default withStyles(styles)(MyComponent)
