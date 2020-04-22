import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Fragment, PureComponent } from "react";
import SwipeableViews from "react-swipeable-views";

import Articles from "../articles";
import LegendeArticle from "../articles/legende-article/legende-article";
import ImpactCards from "../cartes-impact";
import SimulationMenuBar from "../simulation-menu";

interface Props {
  initializeAppllicationStoreFromAPI: () => void;
  montrerPLF: boolean;
  useMobileView: boolean;
}

interface State {
  indextab: number;
}

class ReformeurComponent extends PureComponent<Props, State> {
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

  renderDesktopView = (montrerPLF: boolean) => (
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

  renderMobileView = (montrerPLF: boolean) => {
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

export default ReformeurComponent;
