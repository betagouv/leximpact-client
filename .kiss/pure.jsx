/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  react/jsx-indent: [2, 2,{indentLogicalExpressions: false}],
  react/jsx-indent-props: [2, 2]
*/
import { PureComponent } from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"

const styles = {
  container: {},
}

class MyComponent extends PureComponent {
  render() {
    const { classes } = this.props
    return <div className={classes.container} />
  }
}

MyComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
}

export default withStyles(styles)(MyComponent)
