import babyIcon from "@iconify/icons-twemoji/baby";
import CactusIcon from "@iconify/icons-twemoji/cactus";
import DeciduousTreeIcon from "@iconify/icons-twemoji/deciduous-tree";
import manCurlyHaired from "@iconify/icons-twemoji/man-curly-haired";
import manWhiteHaired from "@iconify/icons-twemoji/man-white-haired";
import PalmTreeIcon from "@iconify/icons-twemoji/palm-tree";
import womanCurlyHaired from "@iconify/icons-twemoji/woman-curly-haired";
import womanWhiteHaired from "@iconify/icons-twemoji/woman-white-haired";
import { Icon } from "@iconify/react";
import {
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Divider,
  IconButton,
  NativeSelect,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Close as CloseIcon, Edit as EditIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import React, { Fragment } from "react";

import DoublePalmTreeIcon from "../../icons/double-palm-tree";
import generateRevenusMensuel from "../../utils/maths/generate-revenus-mensuel";
import BlueTooltip from "./blue-tooltip";

const REVENUS_MENSUEL = generateRevenusMensuel(500);

const RESIDENCE_ITEMS = [
  // Doit correspondre a ceux definis
  // dans /components/ajouter-cas-types/form/cas-types-lieu-residence
  {
    icon: DeciduousTreeIcon,
    key: "metropole",
    label: "Metropole",
  },
  {
    icon: PalmTreeIcon,
    key: "guadeloupe_martinique_reunion",
    label: "Guadeloupe, Martinique, La Réunion",
  },
  {
    icon: DoublePalmTreeIcon,
    key: "mayotte_guyane",
    label: "Mayotte, Guyane",
  },
  {
    icon: CactusIcon,
    key: "etranger",
    label: "Étranger",
  },
];

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
  euroCodeExistant: {
    color: "#565656",
    fontWeight: "regular",
    lineHeight: "10px",
    marginRight: "8px",
  },
  euroPLF: {
    color: "#FF6B6B",
    display: "inline-block",
  },
  impotCodeExistant: {
    backgroundColor: "#DED500",
    backgroundSize: "auto auto",
    color: "#565656",
    fontWeight: "bold",
    lineHeight: "10px",
    padding: "3px",
    // ligne à ajouter quand PLF
    textDecorationColor: "#FF6B6B",
    textDecorationLine: "line-through",
  },
  impotPLF: {
    color: "#FF6B6B",
    display: "inline-block",
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

class SimpleCard extends React.Component {
  handleChange = i => (event) => {
    const { onChange } = this.props;
    onChange(i, event);
  };

  // handleOutreMerChange = numcastype => () => {
  //   const { descCasType, onOutreMerChange } = this.props;
  //   const outreMerIndex = 3 - descCasType.outre_mer;
  //   onOutreMerChange(numcastype, outreMerIndex);
  // };

  roundedRevenues = () => REVENUS_MENSUEL.map((value) => {
    const uniqKey = `palier_${value}`;
    return <option key={uniqKey} value={value}>{`${value}€/mois`}</option>;
  });

  renderLieuDeResidence = () => {
    const { descCasType } = this.props;
    const { lieuResidence: index } = descCasType;
    const { icon, label } = RESIDENCE_ITEMS[index];
    const className = "";
    return (
      <Chip
        // {...chipProps}
        className={className}
        clickable={false}
        icon={<Icon height="20" icon={icon} width="20" />}
        label={label}
        variant="outlined"
      />
    );
  };

  render() {
    const {
      classes,
      descCasType,
      handleEditCarteImpact,
      handleRemoveCarteImpact,
      impotsApres,
      impotsAvant,
      index,
      isLoading,
    } = this.props;

    const { plu65ans, revenusNetMensuel } = descCasType;
    const revrounded = Math.round(revenusNetMensuel);
    const isRetraite = Boolean(plu65ans);
    const manfirst = Math.random() < 0.49;
    const coupledummsexe = Math.random() < 0.15;
    const aretwo = descCasType.nbCouple > 1;
    const nbenfants = descCasType.nbEnfants;
    // const isoutremer1 = descCasType.outre_mer === 1;
    // const isoutremer2 = descCasType.outre_mer === 2;
    // bruts par an
    const icon1 = manfirst
      ? isRetraite
        ? manWhiteHaired
        : manCurlyHaired
      : isRetraite
        ? womanWhiteHaired
        : womanCurlyHaired;
    const icon2 = coupledummsexe
      ? icon1
      : !manfirst
        ? isRetraite
          ? manWhiteHaired
          : manCurlyHaired
        : isRetraite
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
            <IconButton
              aria-label="Delete"
              onClick={() => handleRemoveCarteImpact(index)}>
              <CloseIcon />
            </IconButton>
            <IconButton
              aria-label="Edit"
              onClick={() => handleEditCarteImpact(index)}>
              <EditIcon />
            </IconButton>
            <div>
              <Tooltip
                key="revenus"
                enterDelay={300}
                leaveDelay={200}
                placement="top"
                title={isRetraite ? "Plus de 65 ans" : "Moins de 65 ans"}>
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
              {this.renderLieuDeResidence()}
              {/* {isoutremer1 ? (
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
              )} */}
            </div>
          </div>
          <Divider />
          <div className={classes.div}>
            <Typography className={classes.legende}>
              Impôt sur le revenu par an
            </Typography>
            <Typography
              gutterBottom
              inline
              className={classes.impotCodeExistant}
              variant="h3">
              {-impotsAvant}
            </Typography>
            <Typography
              gutterBottom
              inline
              className={classes.impotPLF}
              variant="h3">
              {-impotsAvant}
            </Typography>
            <Typography
              gutterBottom
              inline
              className={classes.euroPLF}
              variant="h5">
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
  classes: PropTypes.shape().isRequired,
  descCasType: PropTypes.shape().isRequired,
  handleEditCarteImpact: PropTypes.func.isRequired,
  handleRemoveCarteImpact: PropTypes.func.isRequired,
  impotsApres: PropTypes.number.isRequired,
  impotsAvant: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  // onOutreMerChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(SimpleCard);
