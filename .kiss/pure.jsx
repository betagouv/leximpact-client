import { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {},
};

class MyComponent extends PureComponent {
  render() {
    const { classes } = this.props;
    return <div className={classes.container} />;
  }
}

MyComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(MyComponent);
