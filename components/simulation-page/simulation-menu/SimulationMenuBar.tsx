import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import { PureComponent } from "react";
import { connect, ConnectedProps } from "react-redux";
import { compose } from "redux";

import { Button } from "./button";
import { Legende } from "./legende";

const styles = () => ({
  container: {
    marginBottom: "15px",
  },
  marginIcon: {
    marginRight: "15px",
  },
  miniIcon: {
    height: "15px",
  },
});


const mapStateToProps = ({ reformePLF }, { width }) => {
  const isMobileView = width === "xs" || width === "sm" || width === "md";
  const montrerPLF = !!reformePLF;
  return {
    isMobileView,
    montrerPLF,
  };
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  classes: any;
  primaryButtons: {
    onClick: () => void;
    icon?: JSX.Element;
    caption: string;
    mobileCaption: string;
    mobileIcon?: JSX.Element;
  }[],
  secondaryButtons: {
    onClick: () => void;
    icon?: JSX.Element;
    caption: string;
    mobileCaption: string;
    mobileIcon?: JSX.Element;
  }[],
}

class SimulationMenuBar extends PureComponent<Props> {
  render() {
    const {
      classes,
      isMobileView,
      montrerPLF,
      primaryButtons,
      secondaryButtons,
    } = this.props;
    return (
      <Grid
        container
        alignItems="center"
        className={classes.container}
        justify="space-between"
        spacing={8}>
        <Grid item>
          <Legende montrerPLF={montrerPLF} />
        </Grid>
        <Grid item>
          <Grid
            container
            alignItems="center"
            spacing={8}>
            <Grid item>
              <Grid
                container
                alignItems="center"
                spacing={8}>
                {
                  secondaryButtons.map((button, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Grid key={index} item>
                      <Button
                        caption={button.caption}
                        icon={button.icon}
                        isMobileView={isMobileView}
                        mobileCaption={button.mobileCaption}
                        mobileIcon={button.mobileIcon}
                        type="secondary"
                        onClick={button.onClick} />
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                alignItems="center"
                spacing={8}>
                {
                  primaryButtons.map((button, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Grid key={index} item>
                      <Button
                        caption={button.caption}
                        icon={button.icon}
                        isMobileView={isMobileView}
                        mobileCaption={button.mobileCaption}
                        mobileIcon={button.mobileIcon}
                        type="primary"
                        onClick={button.onClick} />
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const ConnectedSimulationMenuBar = compose(
  withWidth(),
  connector,
)(withStyles(styles)(SimulationMenuBar));

export { ConnectedSimulationMenuBar as SimulationMenuBar };
