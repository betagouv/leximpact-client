import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const styles = {
  root: {
    flexGrow: 1,
    paddingTop: "0px",
  },

  typo1: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#6C6C6C",
  },

  titleArticleCGI: {
    color: "#6C6C6C",
    fontSize: "18px",
    fontFamily: "Lora",
    paddingLeft: "6px",
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
            Tranches / décote
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
