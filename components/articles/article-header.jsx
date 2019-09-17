import {
  AppBar, Button, Toolbar, Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Refresh as RefreshIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";

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

function ArticleHeader(props) {
  const { classes, resetVarArticle } = props;

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

ArticleHeader.propTypes = {
  classes: PropTypes.shape().isRequired,
  resetVarArticle: PropTypes.func.isRequired,
};

export default withStyles(stylesTheme, { withTheme: true })(ArticleHeader);
