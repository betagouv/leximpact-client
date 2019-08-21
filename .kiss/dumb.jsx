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
