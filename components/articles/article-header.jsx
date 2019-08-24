import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const stylesTheme = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: "0px",
  },
  styleToolBar: {
    minHeight: "50px",
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
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar
        position="relative"
        style={{ background: "#FFFFFF", boxShadow: "none" }}>
        <Toolbar className={classes.styleToolBar}>
          <Typography className={classes.titleIR}>
            IMPÔT SUR LE REVENU
          </Typography>
          <Typography
            className={classes.titleArticleCGI}
            color="inherit"
            variant="body2">
            - Article 197 du CGI
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ArticleHeader.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(stylesTheme, { withTheme: true })(ArticleHeader);
