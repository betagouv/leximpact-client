import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { PureComponent } from "react";

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

interface Props {
  classes: any;
  isMobileView: boolean;
  montrerPLF: boolean;
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

export default withStyles(styles)(SimulationMenuBar);
