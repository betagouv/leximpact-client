/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    max-nested-callbacks: [2, { "max": 4 }],
    react/jsx-closing-bracket-location: [2, {
        "nonEmpty": false,
        "selfClosing": false
    }],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"]
    }],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }],
    camelcase: 0,
*/
import PropTypes from "prop-types";
import { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Divider, Paper } from "@material-ui/core";

import Articles from "../articles";
import ImpactCards from "../impact-cards";

import ArticleHeader from "./article-header";

const styles = () => ({
  paper: {
    padding: 0,
    margin: "1em",
  },
});

class ReformeurComponent extends PureComponent {
  componentDidMount() {
    const { fetchMetadataCasTypesHandler } = this.props;
    fetchMetadataCasTypesHandler();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="main-index">
        <div className="clearfix">
          <div className="moitie-gauche">
            <Paper className={classes.paper}>
              <ArticleHeader />
              <Divider />
              <Articles />
            </Paper>
          </div>
          <div className="moitie-droite">
            <ImpactCards />
          </div>
        </div>
      </div>
    );
  }
}

ReformeurComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  fetchMetadataCasTypesHandler: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(ReformeurComponent);
