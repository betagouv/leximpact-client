import { Icon } from "@iconify/react";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import PropTypes from "prop-types";
import { PureComponent } from "react";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";

import {
  getIconForThisPerson,
  getParentIsoleLabel,
  shouldDisableParentIsole,
  shouldShowCheckbox,
  shouldShowLabel,
} from "./utils";

const COMPOSITION_FIELDS_MAP = [
  {
    help:
      "Personne remplissant les conditions d'invalidité selon l'Article 195 du CGI.",
    key: "invalide",
    label: "Invalide",
  },
  {
    help:
      "1- Parent seul : contribuable vivant seul sans enfant à charge, ayant élevé seul par le passé un enfant pendant au moins 5 ans. 2- Parent isolé : contribuable ayant seul un ou plusieurs enfants à charge. Voir l'Article 195 du CGI.",
    key: "parentIsole",
    label: "Parent isolé",
  },
  {
    help:
      "Contribuable âgé de plus de soixante-cinq ans. Voir l'Article 157 bis du CGI.",
    key: "plus65ans",
    label: "+65 ans",
  },
  {
    key: "veufVeuve",
    label: "Veuf / Veuve",
  },
  {
    help:
      "Personne âgée de plus de 74 ans et titulaire de la carte du combattant, ou d’une pension militaire d’invalidité. Cette particularité s'applique également à leurs veufs/veuves de plus de 74 ans. Voir l'Article 195 du CGI.",
    key: "ancienCombattant",
    label: "Ancien combattant",
  },
  {
    help:
      "Enfant dont la charge n’est pas exclusivement ou principalement supportée par le contribuable. Voir l'Article 194 du CGI.",
    key: "chargePartagee",
    label: "Charge partagée",
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
  cell: {
    height: 35,
    maxHeight: 35,
    minHeight: 35,
    padding: 0,
    width: 40,
  },
  checkbox: {
    padding: 0,
  },
  checkboxesContainer: {
    overflowX: "auto",
    overflowY: "hidden",
  },
  container: {},
  flexColumns: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
  },
  genderButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    height: 24,
    margin: 0,
    marginBottom: 7,
    maxWidth: 24,
    minWidth: 24,
    padding: 0,
    width: 24,
  },
  icon: {
    padding: 0,
  },
  labelHidden: {
    opacity: 0.25,
    textAlign: "right",
  },
  labels: {
    fontFamily: "Lato",
    fontSize: 14,
    height: 35,
    paddingBottom: 0,
    paddingTop: 4,
    textAlign: "right",
  },
  labelsContainer: {
    flex: 0,
    marginRight: 20,
    marginTop: 28,
    maxWidth: 150,
    minWidth: 150,
    width: 150,
  },
  margedLeft: {
    marginLeft: 20,
  },
  title: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: 14,
  },
  tooltipButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    color: "#B1B1B1",
    padding: "0 6px",
  },
  tooltipContainer: {
    opacity: 1,
  },
  tooltipContent: {
    backgroundColor: "#565656",
    color: "#FFFFFF",
    fontSize: 14,
    padding: 12,
  },
});

class CasTypesComposition extends PureComponent {
  handleCheckboxChange = input => () => {
    const nextValue = Number(input.value) === 0 ? 1 : 0;
    input.onChange(nextValue);
  };

  renderCheckbox = disabled => ({ input }) => {
    const isChecked = input.value === 1;
    const { classes } = this.props;
    return (
      <Checkbox
        checked={isChecked}
        classes={{ root: classes.checkbox }}
        disabled={disabled}
        name={input.name}
        value={String(input.value)}
        onChange={this.handleCheckboxChange(input)}
      />
    );
  };

  renderGenderButton = (showChild, name, index) => {
    const { classes, persons } = this.props;
    const { childs, parents } = persons;
    const currentPerson = showChild ? childs[index] : parents[index];
    const icon = getIconForThisPerson(currentPerson);
    const { invalide } = currentPerson;
    const isInvalide = Boolean(invalide);
    return (
      <Field name={`${name}.gender`}>
        {({ input }) => (
          <Button
            disableRipple
            className={classes.genderButton}
            onClick={() => {
              if (showChild) return;
              const nextGender = currentPerson.gender ? 0 : 1;
              input.onChange(nextGender);
            }}>
            {isInvalide && (
              <Badge
                classes={{ badge: classes.badge }}
                color="primary"
                variant="dot">
                <Icon height="24" icon={icon} width="24" />
              </Badge>
            )}
            <Icon height="24" icon={icon} width="24" />
          </Button>
        )}
      </Field>
    );
  };

  renderCompositionColumn = showChild => (name, index) => {
    const { classes, persons } = this.props;
    const { parents } = persons;
    const parentsCount = parents.length;
    return (
      <div key={name} classes={classes.margedLeft}>
        <div className={classes.icon}>
          {/*  icone du type de personne (enfant/agé/invalide... ) */}
          {this.renderGenderButton(showChild, name, index)}
        </div>
        {COMPOSITION_FIELDS_MAP.map(({ key }) => {
          const fname = `${name}.${key}`;
          const showCheckbox = shouldShowCheckbox(showChild, key, parentsCount);
          const disableCheckbox = shouldDisableParentIsole(key, parentsCount);
          return (
            <div key={key} className={classes.cell}>
              {showCheckbox && (
                <Field name={fname}>
                  {this.renderCheckbox(disableCheckbox)}
                </Field>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  renderColumnLabels = () => {
    const { classes, persons } = this.props;
    const { childs, parents } = persons;
    const childsCount = childs.length;
    const parentsCount = parents.length;
    return (
      <div className={classes.labelsContainer}>
        {COMPOSITION_FIELDS_MAP.map(({ help, key, label }) => {
          const uniqKey = `label::${key}`;
          const showLabel = shouldShowLabel(key, parentsCount, childsCount);
          let className = classes.labels;
          if (!showLabel) className = `${className} ${classes.labelHidden}`;
          const columnLabel = getParentIsoleLabel(
            key,
            label,
            parentsCount,
            childsCount,
          );
          return (
            <div key={uniqKey} className={className}>
              {help && (
                <Tooltip
                  classes={{
                    popper: classes.tooltipContainer,
                    tooltip: classes.tooltipContent,
                  }}
                  title={help}>
                  <IconButton disableRipple className={classes.tooltipButton}>
                    <HelpOutlineIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
              {columnLabel}
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { classes, name } = this.props;
    return (
      <div>
        <span className={classes.title}>Composition du foyer&nbsp;:</span>
        <div className={classes.flexColumns}>
          {/* LABELS */}
          {this.renderColumnLabels()}
          {/* PARENTS */}
          <div
            className={`${classes.flexColumns} ${classes.checkboxesContainer}`}>
            <div>
              <FieldArray name={`${name}.parents`}>
                {({ fields }) => (
                  <div className={classes.flexColumns}>
                    {fields.map(this.renderCompositionColumn(false))}
                  </div>
                )}
              </FieldArray>
            </div>
            {/* CHILDS */}
            <div>
              <FieldArray name={`${name}.childs`}>
                {({ fields }) => (
                  <div className={classes.flexColumns}>
                    {fields.map(this.renderCompositionColumn(true))}
                  </div>
                )}
              </FieldArray>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CasTypesComposition.propTypes = {
  classes: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired,
  persons: PropTypes.shape({
    childs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    parents: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }).isRequired,
};

export default withStyles(styles)(CasTypesComposition);
