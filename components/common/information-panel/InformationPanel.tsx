import lightBulb from "@iconify/icons-twemoji/light-bulb";
import { Icon } from "@iconify/react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import React, { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { hideInformationPanel } from "../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../redux/reducers";

const styles = () => ({
  cardContainer: {
    backgroundColor: "rgba(222, 213, 0, 0.3)",
    minWidth: 50,
    paddingBottom: 0,
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: 0,
    },
    padding: 0,
    width: "moz-available",
  },
  cardEditDeleteButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    margin: 0,
    marginLeft: 0,
    padding: 0,
  },
  cardHeader: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingBottom: 5,
    textAlign: "left",
  },
  divTitre: {
    display: "inline-block",
    paddingLeft: "3px",
  },
  styleExpansionPanel: {
    backgroundColor: "rgba(222, 213, 0, 0)",
    boxShadow: "none",
    padding: "0px",
  },
  subtitleCard: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "0.875em",
    marginBottom: "0.7em",
    marginLeft: "10px",
    textAlign: "justify",
  },
  subtitleEnSavoirPlus: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "0.875em",
    padding: "0",
  },
  titleCard: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "1.125em",
    fontWeight: "bold",
    marginLeft: "10px",
  },
});

interface Props {
  classes: any;
  title: string;
  name: string;
}

const mapStateToProps = ({ display }: RootState, { name }: Props) => ({
  isVisible: display.currentInformationPanels.includes(name),
});

const mapDispatchToProps = (dispatch, { name }: Props) => ({
  onClose: () => dispatch(hideInformationPanel(name)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class InformationPanel extends PureComponent<PropsFromRedux & Props> {
  render() {
    const {
      children,
      classes,
      isVisible,
      onClose,
      title,
    } = this.props;

    if (!isVisible) {
      return <Fragment />;
    }

    return (
      <Card className={classes.cardContainer}>
        <CardContent className={classes.cardContent}>
          <div className={classes.cardHeader}>
            <div className={classes.divTitre}>
              <Icon height="40" icon={lightBulb} width="40" />
            </div>
            <div className={classes.divTitre}>
              <Typography className={classes.titleCard}>
                {title}
              </Typography>
              <Typography className={classes.subtitleCard}>
                {children}
              </Typography>
            </div>

            <div className={classes.cardHeaderButtons}>
              <IconButton
                disableRipple
                aria-label="Delete"
                classes={{ root: classes.cardEditDeleteButton }}
                onClick={onClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}

const Component = withStyles(styles as any)(connector(InformationPanel));

export { Component as InformationPanel };
