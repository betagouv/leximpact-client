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
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Close as CloseIcon, Edit as EditIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";

import DoublePalmTreeIcon from "../../icons/double-palm-tree";
import SimpleCardImpactImpots from "./impact-impots";

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
  cardContainer: {
    minWidth: 50,
    paddingBottom: 0,
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: 0,
    },
    padding: 0,
  },
  cardEditDeleteButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    margin: 0,
    marginLeft: 9,
    padding: 0,
  },
  cardHeader: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  cardHeaderButtons: {
    maxWidth: 60,
    minWidth: 60,
    width: 60,
  },
  cardName: {
    color: "#B1B1B1",
    fontFamily: "Lato",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: "1.1rem",
  },
  iconsContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  residenceIcon: {
    margin: 0,
    padding: 0,
  },
  revenusMensuelLegend: {
    color: "#B1B1B1",
    fontFamily: "Lato",
    fontSize: 10,
  },
});

class SimpleCard extends React.Component {
  renderLieuDeResidence = () => {
    const { classes, descCasType } = this.props;
    const { lieuResidence: index } = descCasType;
    const { icon, label } = RESIDENCE_ITEMS[index];
    return (
      <Tooltip
        key="revenus"
        enterDelay={300}
        leaveDelay={200}
        placement="top"
        title={label}>
        <span>
          <IconButton disabled classes={{ root: classes.residenceIcon }}>
            <Icon height="32" icon={icon} width="32" />
          </IconButton>
        </span>
      </Tooltip>
    );
  };

  renderCardHeader = () => {
    const {
      classes,
      descCasType,
      handleRemoveCasType,
      handleShowEditCasTypesPopin,
      index,
    } = this.props;
    const { name } = descCasType;
    return (
      <div className={classes.cardHeader}>
        <div>
          <Typography classes={{ root: classes.cardName }}>
            <span>{name}</span>
          </Typography>
        </div>
        <div className={classes.cardHeaderButtons}>
          <IconButton
            disableRipple
            aria-label="Delete"
            classes={{ root: classes.cardEditDeleteButton }}
            onClick={handleRemoveCasType(index)}>
            <CloseIcon fontSize="small" />
          </IconButton>
          <IconButton
            disableRipple
            aria-label="Edit"
            classes={{ root: classes.cardEditDeleteButton }}
            onClick={handleShowEditCasTypesPopin(index)}>
            <EditIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    );
  };

  renderRevenuMensuel = () => {
    const { classes, descCasType } = this.props;
    const { revenusNetMensuel } = descCasType;
    const revenusMensuel = Math.round(revenusNetMensuel);

    return (
      <Tooltip
        key="revenus"
        enterDelay={300}
        leaveDelay={200}
        placement="top"
        title="Revenus nets à déclarer">
        <span>
          <Typography classes={{ root: classes.revenusMensuelLegend }}>
            <span>revenus nets à déclarer</span>
          </Typography>
          <Button disabled>
            {revenusMensuel}
            &nbsp;€/mois
          </Button>
        </span>
      </Tooltip>
    );
  };

  renderPersonsIcons = () => {
    const { descCasType } = this.props;

    const { plu65ans } = descCasType;

    const isRetraite = Boolean(plu65ans);
    const manfirst = Math.random() < 0.49;
    const coupledummsexe = Math.random() < 0.15;
    const aretwo = descCasType.nbCouple > 1;
    const nbenfants = descCasType.nbEnfants;
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
    );
  };

  render() {
    const { classes, isLoading, resultats } = this.props;
    return (
      <Card className={classes.cardContainer}>
        <CardContent className={classes.cardContent}>
          {/* CARD HEADER */}
          {this.renderCardHeader()}
          {/* ICONS */}
          <div className={classes.iconsContainer}>
            {this.renderPersonsIcons()}
            {this.renderLieuDeResidence()}
          </div>
          <div>{this.renderRevenuMensuel()}</div>
          <Divider />
          <SimpleCardImpactImpots isLoading={isLoading} resultats={resultats} />
        </CardContent>
      </Card>
    );
  }
}
SimpleCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  descCasType: PropTypes.shape().isRequired,
  handleRemoveCasType: PropTypes.func.isRequired,
  handleShowEditCasTypesPopin: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  resultats: PropTypes.shape({
    apres: PropTypes.number.isRequired,
    avant: PropTypes.number.isRequired,
    plf: PropTypes.number.isRequired,
  }).isRequired,
};

export default withStyles(styles)(SimpleCard);
