import classicalBuilding from "@iconify/icons-twemoji/classical-building";
import warningIcon from "@iconify/icons-twemoji/warning";
import { Icon } from "@iconify/react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";

const styles = () => ({
  warningOutremer: {
    backgroundColor: "#FFAC33",
    borderRadius: "4px",
    color: "#000000",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "regular",
    margin: "10px",
    padding: "10px",
    width: "95%",
  },
});

class ArticleAlinea3 extends PureComponent {
  render() {
    const {
      baseOutputInput,
      classes,
      isUserLogged,
    } = this.props;
    return (
      <Fragment>
        {isUserLogged ? (
          <div className={classes.warningOutremer}>
            <Icon icon={warningIcon} />
            <Icon icon={classicalBuilding} />
            <span>
              La modification des paramètres de la décote outre-mer est
              actuellement uniquement prise en compte pour le calcul de l&apos;impôt des
              foyers fiscaux types.
            </span>
          </div>
        ) : null}
        3. Le montant de l&apos;impôt résultant de l&apos;application des
        dispositions précédentes est réduit de
        {" "}
        {baseOutputInput("plafond_qf.abat_dom.taux_GuadMarReu")}
        {" "}
        %, dans la limite de
        {" "}
        {baseOutputInput("plafond_qf.abat_dom.plaf_GuadMarReu")}
        {" "}
        € pour les
        contribuables domiciliés dans les départements de la Guadeloupe, de
        la Martinique et de la Réunion ; cette réduction est égale à
        {" "}
        {baseOutputInput("plafond_qf.abat_dom.taux_GuyMay")}
        {" "}
        %, dans la limite de
        {" "}
        {baseOutputInput("plafond_qf.abat_dom.plaf_GuyMay")}
        {" "}
        €, pour les contribuables domiciliés dans les départements de la
        Guyane et de Mayotte ;
      </Fragment>
    );
  }
}

ArticleAlinea3.propTypes = {
  baseOutputInput: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ArticleAlinea3);
