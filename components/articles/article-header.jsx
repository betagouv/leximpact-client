import {
  AppBar, Button, Menu, Toolbar, Typography,
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { Refresh as RefreshIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { PureComponent } from "react";

const stylesTheme = theme => ({
  refreshIcon: {
    display: "flex",
    float: "right !important",
    marginLeft: "10px",
  },
  root: {
    flexGrow: 1,
    paddingTop: "0px",
    width: "100%",
  },
  styleToolBar: {
    display: "flex",
    minHeight: "50px",
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
  },
  titleArticleCGI: {
    color: "#6C6C6C",
    fontFamily: "Lora",
    fontSize: "18px",
    paddingLeft: "6px",
    [theme.breakpoints.down("xs")]: {
      color: "#6C6C6C",
      fontFamily: "Lora",
      fontSize: "14px",
      paddingLeft: "6px",
    },
  },
  titleIR: {
    color: "#6C6C6C",
    fontFamily: "Lato",
    fontSize: "20px",
    fontWeight: "bold",
    textTransform: "uppercase",
    [theme.breakpoints.down("xs")]: {
      color: "#6C6C6C",
      fontFamily: "Lato",
      fontSize: "15px",
      paddingLeft: "6px",
    },
  },
});

class ArticleHeader extends PureComponent {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, resetVarArticle } = this.props;
    const { anchorEl } = this.state;
    return (
      <div className={classes.root}>
        <AppBar
          position="relative"
          style={{ background: "#FFFFFF", boxShadow: "none" }}>
          <Toolbar className={classes.styleToolBar}>
            <Typography>
              <span className={classes.titleIR}>IMPÔT SUR LE REVENU</span>
              <span className={classes.titleArticleCGI}>
                - Article 197 du CGI
              </span>
            </Typography>

            <div>
              <Button
                aria-haspopup="true"
                aria-owns={anchorEl ? "simple-menu" : undefined}
                onClick={this.handleClick}>
                Open Menu
              </Button>
              <Menu
                anchorEl={anchorEl}
                id="simple-menu"
                open={Boolean(anchorEl)}
                onClose={this.handleClose}>
                <MenuItem onClick="">Profile</MenuItem>
                <MenuItem onClick="">My account</MenuItem>
                <MenuItem onClick="">Logout</MenuItem>
              </Menu>
            </div>

            <Button
              className={classes.refreshIcon}
              color="inherit"
              size="small"
              variant="outlined"
              onClick={resetVarArticle}>
              <RefreshIcon color="secondary" />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
ArticleHeader.propTypes = {
  classes: PropTypes.shape().isRequired,
  resetVarArticle: PropTypes.func.isRequired,
};

export default withStyles(stylesTheme, { withTheme: true })(ArticleHeader);
