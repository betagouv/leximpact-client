import { AppBar, Tab, Tabs } from "@material-ui/core";
import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";
import SwipeableViews from "react-swipeable-views";

import Articles from "../articles";
import LegendeArticle from "../articles/legende-article/legende-article";
import ImpactCards from "../cartes-impact";
import SimulationMenuBar from "../simulation-menu";

class ReformeurComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { indextab: 0 };
  }

  componentDidMount() {
    const { initializeAppllicationStoreFromAPI } = this.props;
    initializeAppllicationStoreFromAPI();
  }

  handleOnChangeIndex = (event, indextab) => {
    this.setState({ indextab });
  };

  renderDesktopView = montrerPLF => (
    <div className="clearfix">
      <div className="moitie-gauche">
        <LegendeArticle montrerPLF={montrerPLF} />
        <Articles />
      </div>
      <div className="moitie-droite">
        <SimulationMenuBar />
        <ImpactCards />
      </div>
    </div>
  );

  renderMobileView = (montrerPLF) => {
    const { indextab } = this.state;
    return (
      <Fragment>
        <AppBar color="default" position="static">
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            value={indextab}
            variant="fullWidth"
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
            <LegendeArticle montrerPLF={montrerPLF} />
            <Articles />
          </div>
          <div style={{ padding: 24 }}>
            <SimulationMenuBar />
            <ImpactCards />
          </div>
        </SwipeableViews>
      </Fragment>
    );
  };

  render() {
    const { montrerPLF, useMobileView } = this.props;
    return (
      <div className="main-index">
        {useMobileView && this.renderMobileView(montrerPLF)}
        {!useMobileView && this.renderDesktopView(montrerPLF)}
      </div>
    );
  }
}

ReformeurComponent.propTypes = {
  initializeAppllicationStoreFromAPI: PropTypes.func.isRequired,
  montrerPLF: PropTypes.bool.isRequired,
  useMobileView: PropTypes.bool.isRequired,
};

export default ReformeurComponent;
