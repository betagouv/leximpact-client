import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import PropTypes from "prop-types";

import styles from "./Legende.module.scss";

function Legende({ montrerPLF }) {
  return (
    <div>
      <div className={styles.legend}>
        Légende :
      </div>
      <div>
        <span className={styles.initial}>Droit existant</span>
        {montrerPLF && (
          <span className={styles.plf}>
            <a href="http://www.assemblee-nationale.fr/15/projets/pl2272.asp">
              PLF 2020
              <OpenInNewIcon className={styles.icon} />
            </a>
          </span>
        )}
        <span className={styles.reform}>Mon amendment</span>
      </div>
    </div>
  );
}

Legende.propTypes = {
  montrerPLF: PropTypes.bool.isRequired,
};

export default Legende;
