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
import SwipeableViews from "react-swipeable-views";
import { Fragment, PureComponent } from "react";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import MediaQuery from "react-responsive";

import Articles from "../articles";
import ImpactCards from "../cartes-impact";

class ReformeurComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { indextab: 0 };
  }

  componentDidMount() {
    const { fetchMetadataCasTypesHandler } = this.props;
    fetchMetadataCasTypesHandler();
  }

  handleOnChangeIndex = (event, indextab) => {
    this.setState({ indextab });
  }

  renderDesktopView = () => (
    <div className="clearfix">
      <div className="moitie-gauche">
        <Articles />
      </div>
      <div className="moitie-droite">
        <ImpactCards />
      </div>
    </div>
  )

  renderMobileView = () => {
    const { indextab } = this.state;
    return (
      <Fragment>
        <AppBar position="static" color="default">
          <Tabs
            value={indextab}
            textColor="primary"
            variant="fullWidth"
            indicatorColor="primary"
            onChange={this.handleOnChangeIndex}>
            <Tab label="Loi" />
            <Tab label="Impacts" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis="x"
          index={indextab}
          onChangeIndex={this.handleOnChangeIndex}>
          <div style={{ padding: 24 }}>
            <Articles />
          </div>
          <div style={{ padding: 24 }}>
            <ImpactCards />
          </div>
        </SwipeableViews>
      </Fragment>
    );
  }

  render() {
    const maxMobileViewWidth = 960;
    return (
      <div className="main-index">
        <MediaQuery maxWidth={maxMobileViewWidth}>
          {(showMobileView) => {
            const viewRendererFunc = showMobileView
              ? this.renderMobileView
              : this.renderDesktopView;
            return viewRendererFunc();
          }}
        </MediaQuery>
      </div>
    );
  }
}

ReformeurComponent.propTypes = {
  fetchMetadataCasTypesHandler: PropTypes.func.isRequired,
};

export default ReformeurComponent;
