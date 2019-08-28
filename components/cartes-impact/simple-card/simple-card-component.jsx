import BabyIcon from "@iconify/icons-twemoji/baby";
import CactusIcon from "@iconify/icons-twemoji/cactus";
import DeciduousTreeIcon from "@iconify/icons-twemoji/deciduous-tree";
import ManCurlyHairedIcon from "@iconify/icons-twemoji/man-curly-haired";
import ManWhiteHairedIcon from "@iconify/icons-twemoji/man-white-haired";
import PalmTreeIcon from "@iconify/icons-twemoji/palm-tree";
import WomanCurlyHairedIcon from "@iconify/icons-twemoji/woman-curly-haired";
import WomanWhiteHairedIcon from "@iconify/icons-twemoji/woman-white-haired";
import { Icon } from "@iconify/react";
import {
  Badge,
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
import { get } from "lodash";
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
  badge: {
    backgroundColor: "#666666",
    height: 10,
    right: 3,
    top: 5,
    width: 10,
  },
  badgeRoot: {
    verticalAlign: "inherit",
  },
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
    paddingBottom: 5,
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
    paddingTop: 5,
  },
  residenceIcon: {
    margin: 0,
    padding: 0,
  },
  revenusMensuelContainer: {
    padding: 15,
    paddingBottom: 0,
    paddingTop: 0,
  },
  revenusMensuelLegend: {
    color: "#909090",
    fontFamily: "Lato",
    fontSize: 12,
  },
  revenusMensuelValue: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "normal",
    textTransform: "none",
  },
  revenusMensuelWrapper: {
    padding: 0,
  },
});

class SimpleCard extends React.Component {
  renderLieuDeResidence = () => {
    const { classes, descCasType } = this.props;
    const { lieuResidence: index } = descCasType;
    const { icon, label } = RESIDENCE_ITEMS[index];
    return (
      <Tooltip enterDelay={300} leaveDelay={200} placement="top" title={label}>
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
      <div className={classes.revenusMensuelContainer}>
        <Tooltip
          enterDelay={300}
          leaveDelay={200}
          placement="top"
          title="Revenus nets à déclarer">
          <span>
            <Typography classes={{ root: classes.revenusMensuelLegend }}>
              <span>Revenus nets à déclarer</span>
            </Typography>
            <Button disabled classes={{ root: classes.revenusMensuelWrapper }}>
              <span className={classes.revenusMensuelValue}>
                {revenusMensuel}
                &nbsp;€/Mois
              </span>
            </Button>
          </span>
        </Tooltip>
      </div>
    );
  };

  renderPersonsIcons = () => {
    const { classes, descCasType } = this.props;
    const childs = get(descCasType, "persons.childs");
    const parents = get(descCasType, "persons.parents");
    return (
      <div>
        {parents.map((obj, index) => {
          const { gender, invalide, plus65ans } = obj;
          const key = `parent::person::icon::${index}`;
          const isMale = Boolean(gender);
          const isInvalide = Boolean(invalide);
          const isRetraite = Boolean(plus65ans);
          let icon = isMale ? ManCurlyHairedIcon : WomanCurlyHairedIcon;
          if (isRetraite && isMale) icon = ManWhiteHairedIcon;
          if (isRetraite && !isMale) icon = WomanWhiteHairedIcon;
          return (
            <Tooltip
              key={key}
              enterDelay={300}
              leaveDelay={200}
              placement="top"
              title={isRetraite ? "Plus de 65 ans" : "Moins de 65 ans"}>
              <span>
                {!isInvalide && (
                  <Icon key={key} height="40" icon={icon} width="40" />
                )}
                {isInvalide && (
                  <Badge
                    key={key}
                    classes={{ badge: classes.badge, root: classes.badgeRoot }}
                    color="primary"
                    variant="dot">
                    <Icon height="40" icon={icon} width="40" />
                  </Badge>
                )}
              </span>
            </Tooltip>
          );
        })}
        {childs.map((obj, index) => {
          const key = `child::person::icon::${index}`;
          const { invalide } = obj;
          const isInvalide = Boolean(invalide);
          if (!isInvalide) {
            return <Icon key={key} height="30" icon={BabyIcon} width="30" />;
          }
          return (
            <Badge
              key={key}
              classes={{ badge: classes.badge, root: classes.badgeRoot }}
              color="primary"
              variant="dot">
              <Icon height="30" icon={BabyIcon} width="30" />
            </Badge>
          );
        })}
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
