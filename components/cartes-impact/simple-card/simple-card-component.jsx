import babyIcon from "@iconify/icons-twemoji/baby";
import desertIsland from "@iconify/icons-twemoji/desert-island";
import manCurlyHaired from "@iconify/icons-twemoji/man-curly-haired";
import manWhiteHaired from "@iconify/icons-twemoji/man-white-haired";
import womanCurlyHaired from "@iconify/icons-twemoji/woman-curly-haired";
import womanWhiteHaired from "@iconify/icons-twemoji/woman-white-haired";
import { Icon } from "@iconify/react";
import {
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Divider,
  NativeSelect,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { Fragment } from "react";

const styles = () => ({
  card: {
    minWidth: 50,
    paddingBottom: 0,
  },
  cardcontent: {
    "&:last-child": {
      paddingBottom: 0,
    },
    padding: 0,
  },
  chip: {
    marginTop: 10,
  },
  div: {
    padding: 15,
  },
  legende: {
    color: "#909090",
    fontFamily: "Lato",
    fontSize: 12,
    marginBottom: 10,
  },
  nativeselect: {},
  titre: {
    fontSize: 11,
  },
});

function numberToRevenuparmois(rev) {
  return `${rev}€/mois`;
}

const BlueTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#00a3ff",
    color: "#ffffff",
    fontSize: theme.typography.pxToRem(12),
    maxWidth: 220,
  },
  tooltipPlacementBottom: {
    margin: "0px 0",
  },
}))(Tooltip);

class SimpleCard extends React.Component {
  handleChange = i => (event) => {
    const { onChange } = this.props;
    onChange(i, event);
  };

  handleOutreMerChange = numcastype => () => {
    const { descCasType, onOutreMerChange } = this.props;
    const outreMerIndex = 3 - descCasType.outre_mer;
    // console.log("je suis dans l'outremer",numcastype,event,this.props.descCasType.outre_mer)
    onOutreMerChange(numcastype, outreMerIndex);
  };

  roundedRevenues(revenumensuel) {
    const roundlevel = [100, 50, 100, 200, 500, 1000, 5000, 10000, 100000];
    const paliers = [
      900,
      2000,
      3000,
      4000,
      10000,
      15000,
      20000,
      100000,
      1000000,
    ];
    // for now the rounded revenues do not depend on the current value
    let currpal = 0;
    const res = [];
    for (let i = 500; currpal < paliers.length; i += roundlevel[currpal]) {
      const uniqKey = `palier_${i}`;
      res.push(<option key={uniqKey} value={i}>{`${i}€/mois`}</option>);
      if (i >= paliers[currpal]) {
        currpal++;
      }
    }
    return res;
  }

  render() {
    const {
      classes,
      descCasType,
      impotsApres,
      impotsAvant,
      index,
      isLoading,
    } = this.props;

    const styleIcons = {
      width: "10em",
    };
    const { revenu } = descCasType;
    const revrounded = Math.round(revenu / 12);
    const revtodisp = numberToRevenuparmois(revrounded);
    const isret = !!descCasType.nombre_declarants_retraites;
    const manfirst = Math.random() < 0.49;
    const coupledummsexe = Math.random() < 0.15;
    const aretwo = descCasType.nombre_declarants > 1;
    const nbenfants = descCasType.nombre_personnes_a_charge;
    const isoutremer1 = descCasType.outre_mer === 1;
    const isoutremer2 = descCasType.outre_mer === 2;
    // bruts par an
    const icon1 = manfirst
      ? isret
        ? manWhiteHaired
        : manCurlyHaired
      : isret
        ? womanWhiteHaired
        : womanCurlyHaired;
    const icon2 = coupledummsexe
      ? icon1
      : !manfirst
        ? isret
          ? manWhiteHaired
          : manCurlyHaired
        : isret
          ? womanWhiteHaired
          : womanCurlyHaired;
    const babyicons = [...Array(nbenfants)].map((e, i) => {
      const keyindex = `baby${i}`;
      return <Icon key={keyindex} height="30" icon={babyIcon} width="30" />;
    });
    return (
      <Card className={classes.card}>
        <CardContent className={classes.cardcontent}>
          <div className={classes.div}>
            <div>
              <Tooltip
                key="revenus"
                enterDelay={300}
                leaveDelay={200}
                placement="top"
                title={isret ? "Plus de 65 ans" : "Moins de 65 ans"}>
                <span>
                  {<Icon key="person1" height="40" icon={icon1} width="40" />}
                  {aretwo ? (
                    <Icon key="person2" height="40" icon={icon2} width="40" />
                  ) : (
                    ""
                  )}
                </span>
              </Tooltip>
              {babyicons}
            </div>
            <div>
              <Tooltip
                key="revenus"
                enterDelay={300}
                leaveDelay={200}
                placement="top"
                title="Revenus bruts">
                <NativeSelect
                  className={classes.nativeselect}
                  value={revrounded}
                  onChange={this.handleChange(index)}>
                  <option value={revrounded}>{`${revrounded}€/mois`}</option>
                  {this.roundedRevenues(revrounded)}
                  {" "}
}
                </NativeSelect>
              </Tooltip>
            </div>
            <div>
              {isoutremer1 ? (
                <Tooltip
                  key="outremer1"
                  enterDelay={300}
                  leaveDelay={200}
                  placement="bottom"
                  title="Guadeloupe, Martinique ou Réunion">
                  <Chip
                    className={classes.chip}
                    icon={<Icon height="20" icon={desertIsland} width="20" />}
                    label="Outre-mer n° 1"
                    onClick={this.handleOutreMerChange(index)}
                  />
                </Tooltip>
              ) : isoutremer2 ? (
                <Tooltip
                  key="outremer2"
                  enterDelay={300}
                  leaveDelay={200}
                  placement="bottom"
                  title="Guyane ou Mayotte">
                  <Chip
                    className={classes.chip}
                    icon={<Icon height="20" icon={desertIsland} width="20" />}
                    label="Outre-mer n° 2"
                    onClick={this.handleOutreMerChange(index)}
                  />
                </Tooltip>
              ) : (
                ""
              )}
            </div>
          </div>
          <Divider />
          <div className={classes.div}>
            <Typography className={classes.legende}>
              Impôt sur le revenu par an
            </Typography>
            <Typography gutterBottom inline color="primary" variant="h3">
              {-impotsAvant}
            </Typography>
            <Typography gutterBottom inline color="primary" variant="h5">
              €
            </Typography>
            <br />
            <BlueTooltip
              key="gain"
              enterDelay={300}
              leaveDelay={200}
              placement="bottom-start"
              title={(
                <Fragment>
                  {"Soit "}
                  <b>
                    {`${(-impotsApres + impotsAvant > 0 ? "+" : "-")
                      + Math.round(Math.abs(-impotsApres + impotsAvant))}€`}
                  </b>
                  {"/an"}
                </Fragment>
              )}>
              <div>
                {isLoading ? (
                  <CircularProgress color="secondary" />
                ) : (
                  <Fragment>
                    <Typography
                      gutterBottom
                      inline
                      color="secondary"
                      variant="h3">
                      {-impotsApres}
                    </Typography>
                    <Typography
                      gutterBottom
                      inline
                      color="secondary"
                      variant="h5">
                      €
                    </Typography>
                  </Fragment>
                )}
              </div>
            </BlueTooltip>
          </div>
        </CardContent>
      </Card>
    );
  }
}
SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
  handleEditCarteImpact: PropTypes.func.isRequired,
  handleRemoveCarteImpact: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(SimpleCard);
