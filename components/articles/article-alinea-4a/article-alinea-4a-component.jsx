import PropTypes from "prop-types";
import { PureComponent } from "react";

import styles from "../articles.module.scss";

class Alinea4a extends PureComponent {
  render() {
    const {
      baseOutputInput,
      formulaOutputInput,
    } = this.props;
    return (
      <div className={styles.text}>
        4. a. Le montant de l&apos;impôt résultant de l&apos;application des
        dispositions précédentes est diminué, dans la limite de son montant,
        de la différence entre
        {" "}
        {baseOutputInput("decote.seuil_celib")}
        € et
        {" "}
        {baseOutputInput("decote.taux")}
        % de son montant pour les contribuables célibataires, divorcés ou
        veufs et de la différence entre
        {baseOutputInput("decote.seuil_couple")}
        {" "}
        € et
        {" "}
        {formulaOutputInput("decote.taux")}
        % de son montant pour les contribuables soumis à imposition
        commune.
      </div>
    );
  }
}

Alinea4a.propTypes = {
  baseOutputInput: PropTypes.func.isRequired,
  formulaOutputInput: PropTypes.func.isRequired,
};

export default Alinea4a;
