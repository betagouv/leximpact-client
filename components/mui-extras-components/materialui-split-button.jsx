import { Button, Menu, SvgIcon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({
  button: {
    boxShadow: "none",
    flex: "1 0 auto",
  },
  buttonFullWidth: {
    display: "flex",
    width: "100%",
  },
  buttonPositionLeft: {
    "&:hover": {
      borderLeftWidth: 0,
    },
    borderBottomLeftRadius: 0,
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
  },
  buttonPositionRight: {
    "&:hover": {
      borderRightWidth: 0,
    },
    borderBottomRightRadius: 0,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
  },
  menuButton: {
    boxShadow: "none",
    flex: "none",
    minWidth: theme.spacing.unit * 4,
    paddingLeft: 0,
    paddingRight: 0,
    width: theme.spacing.unit * 4,
  },
  menuPositionLeft: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  menuPositionRight: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
  },
  root: {
    borderRadius: theme.spacing.unit / 2,
  },
  rootContained: {
    boxShadow: theme.shadows[4],
  },
});

class MuiSplitButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  handleOpen = ({ currentTarget }) => {
    this.setState({ anchorEl: currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  menuButton = () => {
    const { anchorEl } = this.state;
    const {
      menuButtonProps = {},
      classes,
      position = "right",
      variant,
      color,
    } = this.props;

    const { className = "", ...restProps } = menuButtonProps;

    const buttonClasseNames = classNames(
      position === "left"
        ? classes.menuPositionLeft
        : classes.menuPositionRight,
      classes.menuButton,
      className,
    );
    const ariaOwns = anchorEl ? "material-ui-split-button-menu" : undefined;
    return (
      <Button
        {...restProps}
        aria-haspopup="true"
        aria-owns={ariaOwns}
        className={buttonClasseNames}
        color={color}
        variant={variant}
        onClick={this.handleOpen}>
        <SvgIcon>
          <path d="M7 10l5 5 5-5z" />
        </SvgIcon>
      </Button>
    );
  };

  render() {
    const { anchorEl } = this.state;

    const {
      children,
      className = "",
      classes,
      fullWidth = false,
      menuButtonProps,
      menuProps,
      position = "right",
      renderMenu,
      variant,
      ...restProps
    } = this.props;

    return (
      <div
        className={classNames(
          classes.root,
          variant === "contained" && classes.rootContained,
          fullWidth && classes.buttonFullWidth,
        )}>
        {position === "left" && this.menuButton()}

        <Button
          {...restProps}
          className={classNames(
            position === "left"
              ? classes.buttonPositionLeft
              : classes.buttonPositionRight,
            classes.button,
            className,
          )}
          variant={variant}>
          {children}
        </Button>

        {position === "right" && this.menuButton()}

        <Menu
          {...menuProps}
          anchorEl={anchorEl}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          getContentAnchorEl={null}
          id="simple-menu"
          open={Boolean(anchorEl)}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          onClose={this.handleClose}>
          <div>{renderMenu({ handleClose: this.handleClose })}</div>
        </Menu>
      </div>
    );
  }
}

MuiSplitButton.defaultProps = {
  className: "",
  color: "default",
  fullWidth: false,
  menuButtonProps: {},
  menuProps: {},
  position: "right",
  variant: "text",
};

MuiSplitButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  classes: PropTypes.shape().isRequired,
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  fullWidth: PropTypes.bool,
  menuButtonProps: PropTypes.shape(),
  menuProps: PropTypes.shape(),
  position: PropTypes.oneOf(["left", "right"]),
  renderMenu: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
};

export default withStyles(styles)(MuiSplitButton);
