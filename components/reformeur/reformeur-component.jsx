import { AppBar, Tab, Tabs } from "@material-ui/core";
import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";
import SwipeableViews from "react-swipeable-views";

import Articles from "../articles";
import ImpactCards from "../cartes-impact";
import PopSimulationBar from "../pop-simulation-bar";

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
  };

  renderDesktopView = () => {
    const { isUserConnected } = this.props;
    return (
      <div className="clearfix">
        <div className="moitie-gauche">
          <Articles />
        </div>
        <div className="moitie-droite">
          {isUserConnected && <PopSimulationBar />}
          <ImpactCards />
        </div>
      </div>
    );
  };

  renderMobileView = () => {
    const { indextab } = this.state;
    const { isUserConnected } = this.props;
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
            <Articles />
          </div>
          <div style={{ padding: 24 }}>
            {isUserConnected && <PopSimulationBar />}
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
  fetchMetadataCasTypesHandler: PropTypes.func.isRequired,
  isUserConnected: PropTypes.bool.isRequired,
  useMobileView: PropTypes.bool.isRequired,
};

export default ReformeurComponent;
