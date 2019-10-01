import {
  AppBar, Button, Menu, Toolbar, Typography,
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { Refresh as RefreshIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { PureComponent } from "react";

const stylesTheme = theme => ({
  menuPaper: {
    backgroundColor: "rgba(255, 255, 255, 1) !important",
    paddingBottom: "5px",
    paddingTop: "5px",
  },
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
  styleCodeExistant: {
    fontFamily: "Lora",
    backgroundColor: "#DED500",
    backgroundSize: "auto auto",
    color: "#000000",
    fontWeight: "bold",
    lineHeight: "10px",
    marginLeft: "8px",
    padding: "3px",
  },
  stylePLF: {
    fontFamily: "Lora",
    color: "#FF6B6B",
    fontWeight: "bold",
    lineHeight: "10px",
    marginLeft: "3px",
    marginRight: "5px",
  },
  stylePaperTitreMenu: {
    backgroundColor: "rgba(255, 255, 255, 1) !important",
    padding: "2px",
    fontFamily: "Lato",
    paddingLeft: "15px",
    paddingRight: "15px",
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
                color="secondary"
                size="small"
                onClick={this.handleClick}>
                <RefreshIcon color="secondary" />
              </Button>
              <Menu
                anchorEl={anchorEl}
                id="simple-menu"
                open={Boolean(anchorEl)}
                onClose={this.handleClose}>
                <div className={classes.stylePaperTitreMenu}>
                  <span>
                    Réinitialiser mon amendement
                    <br />
                    {" "}
avec les paramètres du&nbsp;:
                  </span>
                </div>
                <MenuItem
                  className={classes.menuPaper}
                  onClick={this.handleClose}>
                  <span>-</span>
                  <span className={classes.stylePLF}>&nbsp;PLF</span>
                </MenuItem>
                <MenuItem
                  className={classes.menuPaper}
                  onClick={this.handleClose}>
                  <span>-</span>
                  <span className={classes.styleCodeExistant}>
                    &nbsp;code existant
                  </span>
                </MenuItem>
              </Menu>
            </div>
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
