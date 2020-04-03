import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
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

  renderDesktopView = () => (
    <div className="clearfix">
      <div className="moitie-gauche">
        <LegendeArticle />
        <Articles />
      </div>
      <div className="moitie-droite">
        <SimulationMenuBar />
        <ImpactCards />
      </div>
    </div>
  );

  renderMobileView = () => {
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
            <LegendeArticle />
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
    const { useMobileView } = this.props;
    return (
      <div className="main-index">
        {useMobileView && this.renderMobileView()}
        {!useMobileView && this.renderDesktopView()}
      </div>
    );
  }
}

ReformeurComponent.propTypes = {
  initializeAppllicationStoreFromAPI: PropTypes.func.isRequired,
  useMobileView: PropTypes.bool.isRequired,
};

export default ReformeurComponent;
