import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const styles = {
  root: {
    flexGrow: 1,
    paddingTop: "0px",
  },
  titleArticleCGI: {
    color: "#6C6C6C",
    fontFamily: "Lora",
    fontSize: "18px",
    paddingLeft: "6px",
  },
  typo1: {
    color: "#6C6C6C",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};

function ArticleHeader(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar
        position="relative"
        style={{ background: "#FFFFFF", boxShadow: "none" }}>
        <Toolbar>
          <Typography className={classes.typo1} color="inherit" variant="h4">
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

export default withStyles(styles)(ArticleHeader);
