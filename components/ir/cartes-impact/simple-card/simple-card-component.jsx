import BabyIcon from "@iconify/icons-twemoji/baby";
import CactusIcon from "@iconify/icons-twemoji/cactus";
import DeciduousTreeIcon from "@iconify/icons-twemoji/deciduous-tree";
import ManCurlyHairedIcon from "@iconify/icons-twemoji/man-curly-haired";
import ManWhiteHairedIcon from "@iconify/icons-twemoji/man-white-haired";
import PalmTreeIcon from "@iconify/icons-twemoji/palm-tree";
import WomanCurlyHairedIcon from "@iconify/icons-twemoji/woman-curly-haired";
import WomanWhiteHairedIcon from "@iconify/icons-twemoji/woman-white-haired";
import { Icon } from "@iconify/react";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { get } from "lodash";
import PropTypes from "prop-types";
import React, { Fragment } from "react";

import { Card } from "../../../common";
import DoublePalmTreeIcon from "../../../common/icons/double-palm-tree";
import { NeutralTooltip } from "../../../common";
import { formatNumber } from "../../../common";
import SimpleCardImpactImpots from "./impact-impots";

const RESIDENCE_ITEMS = [
  // Doit correspondre a ceux definis
  // dans /components/ajouter-cas-types/form/cas-types-lieu-residence
  {
    icon: DeciduousTreeIcon,
    key: "metropole",
    label: "Métropole",
  },
  {
    icon: PalmTreeIcon,
    key: "guadeloupe_martinique_reunion",
    label: "Guadeloupe, Martinique ou La Réunion",
  },
  {
    icon: DoublePalmTreeIcon,
    key: "mayotte_guyane",
    label: "Mayotte ou Guyane",
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
  iconsContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  residenceIcon: {
    margin: 0,
    padding: 0,
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
      <NeutralTooltip placement="top" title={label}>
        <span>
          <IconButton disabled classes={{ root: classes.residenceIcon }}>
            <Icon height="32" icon={icon} width="32" />
          </IconButton>
        </span>
      </NeutralTooltip>
    );
  };

  renderRevenuMensuel = () => {
    const { classes, descCasType } = this.props;
    const { revenusNetMensuel } = descCasType;
    const revenusMensuel = Math.round(revenusNetMensuel);
    return (
      <NeutralTooltip
        placement="top"
        title="Revenus nets tels que délarés par le contribuable, divisés par 12">
        <span>
          <Typography classes={{ root: classes.revenusMensuelLegend }}>
            <span>Revenus nets à déclarer</span>
          </Typography>
          <Button disabled classes={{ root: classes.revenusMensuelWrapper }}>
            <span className={classes.revenusMensuelValue}>
              {formatNumber(revenusMensuel)}
              &nbsp;€/Mois
            </span>
          </Button>
        </span>
      </NeutralTooltip>
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
            <NeutralTooltip
              key={key}
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
            </NeutralTooltip>
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
    const {
      classes, descCasType, handleRemoveCasType,
      handleShowEditCasTypesPopin, index, isLoading, resultats,
    } = this.props;
    const { name } = descCasType;
    return (
      <Card
        content1={(
          <Fragment>
            <div className={classes.iconsContainer}>
              {this.renderPersonsIcons()}
              {this.renderLieuDeResidence()}
            </div>
            <div>{this.renderRevenuMensuel()}</div>
          </Fragment>
        )}
        content2={<SimpleCardImpactImpots isLoading={isLoading} resultats={resultats} />}
        title={name}
        onClose={handleRemoveCasType(index)}
        onEdit={handleShowEditCasTypesPopin(index)} />
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
    plf: PropTypes.number,
  }).isRequired,
};

export default withStyles(styles)(SimpleCard);
