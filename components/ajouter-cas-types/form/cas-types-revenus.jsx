import { IconButton, NativeSelect, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { HelpOutline as HelpOutlineIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { Field } from "react-final-form";

import formatMilliers from "../../utils/format-milliers";
import generateRevenusMensuel from "../../utils/maths/generate-revenus-mensuel";

const REVENUS_MENSUEL = generateRevenusMensuel(500);
const selectOptions = REVENUS_MENSUEL.map((value) => {
  const uniqKey = `revenu_mensuel_${value}`;
  return <option key={uniqKey} value={value}>{`${formatMilliers(value)} €/mois`}</option>;
});

const styles = () => ({
  container: {},
  flexbox: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  label: {
    color: "#B1B1B1",
    fontFamily: "Lato",
    fontSize: 14,
    marginLeft: 47,
    paddingTop: 6,
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

const REVENUS_HELP = "Somme des traitements, salaires nets et pensions que le foyer fiscal déclare par an sur sa feuille d'impôt, divisé par le nombre de mois d’une année.";

const CasTypesRevenus = ({ classes, name }) => (
  <label htmlFor={name}>
    <div>
      <Tooltip
        classes={{
          popper: classes.tooltipContainer,
          tooltip: classes.tooltipContent,
        }}
        title={REVENUS_HELP}>
        <IconButton disableRipple className={classes.tooltipButton}>
          <HelpOutlineIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <span className={classes.title}>
        Revenus net à déclarer par mois&nbsp;:
      </span>
    </div>
    <div className={classes.flexbox}>
      <Field id={name} name={name}>
        {({ input }) => {
          const revenuMensuel = input.value;
          const revenuAnnuel = input.value * 12;
          return (
            <Fragment>
              <NativeSelect
                name={input.name}
                value={revenuMensuel}
                onChange={input.onChange}>
                {selectOptions}
              </NativeSelect>
              <span className={classes.label}>
                {`Soit ${formatMilliers(revenuAnnuel)} €/an`}
              </span>
            </Fragment>
          );
        }}
      </Field>
    </div>
  </label>
);

CasTypesRevenus.propTypes = {
  classes: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(CasTypesRevenus);
