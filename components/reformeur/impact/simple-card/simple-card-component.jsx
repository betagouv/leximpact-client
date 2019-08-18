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
    }]
*/
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  Chip,
  CircularProgress,
  CardContent,
  Divider,
  NativeSelect,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { Icon } from "@iconify/react";
import manCurlyHaired from "@iconify/icons-twemoji/man-curly-haired";
import babyIcon from "@iconify/icons-twemoji/baby";
import manWhiteHaired from "@iconify/icons-twemoji/man-white-haired";
import womanCurlyHaired from "@iconify/icons-twemoji/woman-curly-haired";
import womanWhiteHaired from "@iconify/icons-twemoji/woman-white-haired";
import desertIsland from "@iconify/icons-twemoji/desert-island";

const styles = () => ({
  card: {
    minWidth: 50,
    paddingBottom: 0,
  },
  cardcontent: {
    padding: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  titre: {
    fontSize: 11,
  },
  nativeselect: {},
  legende: {
    fontSize: 12,
    color: "#909090",
    fontFamily: "Lato",
    marginBottom: 10,
  },
  div: {
    padding: 15,
  },
  chip: {
    marginTop: 10,
  },
});

function numberToRevenuparmois(rev) {
  return `${rev}€/mois`;
}

const BlueTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#00a3ff",
    color: "#ffffff",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
  },
  tooltipPlacementBottom: {
    margin: "0px 0",
  },
}))(Tooltip);

class SimpleCard extends React.Component {
  handleChange = i => (event) => {
    this.props.onChange(i, event);
  }

  handleOutreMerChange = numcastype => () => {
    const { onOutreMerChange, descCasType } = this.props;
    const outreMerIndex = 3 - descCasType.outre_mer;
    // console.log("je suis dans l'outremer",numcastype,event,this.props.descCasType.outre_mer)
    onOutreMerChange(numcastype, outreMerIndex);
  }

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
      index,
      descCasType,
      impotsAvant,
      impotsApres,
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
    const isoutremer1 = descCasType.outre_mer == 1;
    const isoutremer2 = descCasType.outre_mer == 2;
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
    const babyicons = [...Array(nbenfants)].map((e, i) => (
      <Icon key={`baby${i}`} icon={babyIcon} width="30" height="30" />
    ));
    return (
      <Card className={classes.card}>
        <CardContent className={classes.cardcontent}>
          <div className={classes.div}>
            <div>
              <Tooltip
                key="revenus"
                placement="top"
                title={isret ? "Plus de 65 ans" : "Moins de 65 ans"}
                enterDelay={300}
                leaveDelay={200}>
                <span>
                  {<Icon key="person1" icon={icon1} width="40" height="40" />}
                  {aretwo ? (
                    <Icon key="person2" icon={icon2} width="40" height="40" />
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
                placement="top"
                title="Revenus bruts"
                enterDelay={300}
                leaveDelay={200}>
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
                  placement="bottom"
                  title="Guadeloupe, Martinique ou Réunion"
                  enterDelay={300}
                  leaveDelay={200}>
                  <Chip
                    className={classes.chip}
                    onClick={this.handleOutreMerChange(index)}
                    icon={<Icon icon={desertIsland} width="20" height="20" />}
                    label="Outre-mer n° 1"
                  />
                </Tooltip>
              ) : isoutremer2 ? (
                <Tooltip
                  key="outremer2"
                  placement="bottom"
                  title="Guyane ou Mayotte"
                  enterDelay={300}
                  leaveDelay={200}>
                  <Chip
                    className={classes.chip}
                    icon={<Icon icon={desertIsland} width="20" height="20" />}
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
            <Typography inline variant="h3" color="primary" gutterBottom>
              {-impotsAvant}
            </Typography>
            <Typography inline variant="h5" color="primary" gutterBottom>
              €
            </Typography>
            <br />
            <BlueTooltip
              key="gain"
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
              )}
              enterDelay={300}
              leaveDelay={200}>
              <div>
                {isLoading ? (
                  <CircularProgress color="secondary" />
                ) : (
                  <>
                    <Typography
                      inline
                      variant="h3"
                      color="secondary"
                      gutterBottom>
                      {-impotsApres}
                    </Typography>
                    <Typography
                      inline
                      variant="h5"
                      color="secondary"
                      gutterBottom>
                      €
                    </Typography>
                  </>
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
  isLoading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SimpleCard);
