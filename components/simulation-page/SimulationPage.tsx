import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { PureComponent } from "react";
import SwipeableViews from "react-swipeable-views";

import AppHeader from "../app-header";
import SimulationMenuBar from "./simulation-menu";
import styles from "./SimulationPage.module.scss";

interface Props {
  initializeAppllicationStoreFromAPI: () => void;
  useMobileView: boolean;
  title: string;
  subTitle1: string;
  subTitle2: string;
  parameters: JSX.Element;
  results: JSX.Element;
  primaryButtons: {
    onClick: () => void;
    icon?: JSX.Element;
    caption: string;
    mobileCaption: string;
    mobileIcon?: JSX.Element;
  }[];
  secondaryButtons?: {
    onClick: () => void;
    icon?: JSX.Element;
    caption: string;
    mobileCaption: string;
    mobileIcon?: JSX.Element;
  }[];
}

interface State {
  indextab: number;
}

export class SimulationPage extends PureComponent<Props, State> {
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

  renderDesktopView = () => {
    const {
      parameters, primaryButtons, results, secondaryButtons,
    } = this.props;
    return (
      <div className={styles.container}>
        <Paper square className={styles.parameters}>
          {parameters}
        </Paper>
        <div className={styles.results}>
          <SimulationMenuBar
            primaryButtons={primaryButtons}
            secondaryButtons={secondaryButtons}
          />
          {results}
        </div>
      </div>
    );
  }

  renderMobileView = () => {
    const { indextab } = this.state;
    const {
      parameters, primaryButtons, results, secondaryButtons,
    } = this.props;
    return (
      <div>
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
            <Paper>
              {parameters}
            </Paper>
          </div>
          <div style={{ padding: 24 }}>
            <SimulationMenuBar
              primaryButtons={primaryButtons}
              secondaryButtons={secondaryButtons} />
            {results}
          </div>
        </SwipeableViews>
      </div>
    );
  };

  render() {
    const {
      subTitle1, subTitle2, title, useMobileView,
    } = this.props;
    return (
      <div className={styles.page}>
        <AppHeader subTitle1={subTitle1} subTitle2={subTitle2} title={title} />
        {useMobileView ? this.renderMobileView() : this.renderDesktopView()}
      </div>
    );
  }
}
