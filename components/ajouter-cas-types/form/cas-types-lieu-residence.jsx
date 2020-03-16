import CactusIcon from "@iconify/icons-twemoji/cactus";
import DeciduousTreeIcon from "@iconify/icons-twemoji/deciduous-tree";
import PalmTreeIcon from "@iconify/icons-twemoji/palm-tree";
import { Icon } from "@iconify/react";
import { Chip } from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Field } from "react-final-form";

import DoublePalmTreeIcon from "../../icons/double-palm-tree";

const styles = {
  button: {
    fontSize: 14,
    marginRight: 24,
    marginTop: 11,
    textTransform: "inherit",
  },
  buttonDisabled: {
    opacity: 0.45,
  },
  container: {},
  flexbox: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    overflowX: "hidden",
    overflowY: "hidden",
  },
  title: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: 14,
  },
};

const RESIDENCE_ITEMS = [
  {
    clickable: true,
    icon: DeciduousTreeIcon,
    key: "metropole",
    label: "Metropole",
  },
  {
    clickable: true,
    icon: PalmTreeIcon,
    key: "guadeloupe_martinique_reunion",
    label: "Guadeloupe, Martinique, La Réunion",
  },
  {
    clickable: true,
    icon: DoublePalmTreeIcon,
    key: "mayotte_guyane",
    label: "Mayotte, Guyane",
  },
  {
    clickable: false,
    icon: CactusIcon,
    key: "etranger",
    label: "Étranger",
  },
];

function CasTypesLieuResidence({ classes, name }) {
  return (
    <div>
      <span className={classes.title}>Lieu de résidence&nbsp;:</span>
      <div className={classes.flexbox}>
        <Field name={name}>
          {({ input }) => RESIDENCE_ITEMS.map(({
            clickable, icon, key, label,
          }, index) => {
            const isSelected = input.value === index;
            const variant = !isSelected ? "outlined" : "default";
            let className = classes.button;
            let chipProps = { onClick: () => input.onChange(index) };
            if (!clickable) {
              // disable du chip
              chipProps = {};
              className = `${className} ${classes.buttonDisabled}`;
            }
            return (
              <Chip
                {...chipProps}
                key={key}
                className={className}
                clickable={clickable}
                icon={<Icon height="20" icon={icon} width="20" />}
                label={label}
                variant={variant}
              />
            );
          })
          }
        </Field>
      </div>
    </div>
  );
}

CasTypesLieuResidence.propTypes = {
  classes: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(CasTypesLieuResidence);
