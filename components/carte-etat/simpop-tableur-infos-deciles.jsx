import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";

import { formatNumber } from "../utils";
import styles2 from "./simpop-tableur-infos-deciles.module.scss";

const styles = {
  cellStyle: {
    padding: "0.6em",
    textAlign: "center",
  },
  infinity: {
    fontSize: "2em",
    fontWeight: "330",
    verticalAlign: "sub",
  },
  tableHeader: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "1.125em",
    height: "0px",
    textAlign: "center",
    verticalAlign: "top",
  },
};

const NOMBRE_DECILES = 10;
let id = 0;
function createData(
  decile,
  frontiereDecile,
  impactMoyenFoyerPlf,
  impactMoyenFoyerReforme,
  impotMoyenFoyer,
  impotMoyenFoyerPlf,
  impotMoyenFoyerReforme,
  recettesEtat,
  recettesEtatPlf,
  recettesEtatReforme,
) {
  id += 1;
  return {
    decile,
    frontiereDecile,
    id,
    impactMoyenFoyerPlf,
    impactMoyenFoyerReforme,
    impotMoyenFoyer,
    impotMoyenFoyerPlf,
    impotMoyenFoyerReforme,
    recettesEtat,
    recettesEtatPlf,
    recettesEtatReforme,
  };
}

function createFromDeciles(index, decile, frontiereDecile) {
  const montrerPLF = typeof decile.plf === "number";

  let impactMoyenFoyerPlf = null;
  if (montrerPLF) {
    impactMoyenFoyerPlf = decile.avant
      ? formatNumber(Math.round((decile.plf / decile.avant - 1) * 100))
      : "-";
  }
  const impactMoyenFoyerReforme = decile.avant
    ? formatNumber(Math.round((decile.apres / decile.avant - 1) * 100))
    : "-";
  const impotMoyenFoyer = formatNumber(Math.round(decile.avant / decile.poids));
  let impotMoyenFoyerPlf = null;
  if (montrerPLF) {
    impotMoyenFoyerPlf = formatNumber(Math.round(decile.plf / decile.poids));
  }
  const impotMoyenFoyerReforme = formatNumber(Math.round(decile.apres / decile.poids));
  const recettesEtat = formatNumber(Math.round(decile.avant / 10000000) / 100);
  let recettesEtatPlf = null;
  if (montrerPLF) {
    recettesEtatPlf = formatNumber(Math.round(decile.plf / 10000000) / 100);
  }
  const recettesEtatReforme = formatNumber(Math.round(decile.apres / 10000000) / 100);
  const frontiere = index + 1 < NOMBRE_DECILES ? formatNumber(Math.round(frontiereDecile)) : "-";

  return createData(
    index + 1,
    formatNumber(frontiere),
    impactMoyenFoyerPlf,
    impactMoyenFoyerReforme,
    impotMoyenFoyer,
    impotMoyenFoyerPlf,
    impotMoyenFoyerReforme,
    recettesEtat,
    recettesEtatPlf,
    recettesEtatReforme,
  );
}

function imageDecile(decileId) {
  const imageId = `imageDecile${decileId}`;
  const imagePath = `/static/images/decile${decileId}.png`;
  return <img key={imageId} alt="" height="24" src={imagePath} width="24" />;
}

function SimpopTableurInfosDeciles({ classes, deciles, frontieresDeciles }) {
  const rows = deciles.map(
    (currElement, index) => createFromDeciles(index, currElement, frontieresDeciles[index]),
  );
  const NON_APPLICABLE = "—";

  return (
    <Table>
      <TableHead>
        <TableRow classes={{ root: classes.tableHeader }}>
          <TableCell classes={{ root: classes.cellStyle }}>
            <b>Décile</b>
          </TableCell>
          <TableCell classes={{ root: classes.cellStyle }}>
            <b>Revenu&nbsp;fiscal de&nbsp;référence</b>
            <br />
            (limite supérieure)
          </TableCell>
          <TableCell classes={{ root: classes.cellStyle }}>
            <b>Impact moyen sur le foyer</b>
            <br />
            (par rapport au code existant)
          </TableCell>
          <TableCell classes={{ root: classes.cellStyle }}>
            <b>Impôt moyen des foyers</b>
            <br />
            (par an)
          </TableCell>
          <TableCell classes={{ root: classes.cellStyle }}>
            <b>Recettes pour l&apos;État</b>
            <br />
            (en Milliards d&apos;euros)
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell classes={{ root: classes.cellStyle }}>
              {imageDecile(row.decile)}
            </TableCell>
            <TableCell classes={{ root: classes.cellStyle }}>
              &#10877;&nbsp;
              {row.frontiereDecile === "-" ? (
                <span className={classes.infinity}>∞</span>
              ) : (
                row.frontiereDecile
              )}
              €/an
            </TableCell>
            <TableCell classes={{ root: classes.cellStyle }}>
              {
                row.impactMoyenFoyerPlf === null
                  ? null
                  : (
                    <span className={styles2.plf}>
                      {row.impactMoyenFoyerPlf === "-"
                        ? NON_APPLICABLE
                        : `${row.impactMoyenFoyerPlf}%`}
                    </span>
                  )
              }
              &nbsp;
              <span className={styles2.reform}>
                {row.impactMoyenFoyerReforme === "-"
                  ? NON_APPLICABLE
                  : `${row.impactMoyenFoyerReforme}%`}
              </span>
            </TableCell>
            <TableCell classes={{ root: classes.cellStyle }}>
              <span className={styles2.base}>
                {row.impotMoyenFoyer}
                €
              </span>
              &nbsp;
              {
                row.impotMoyenFoyerPlf === null
                  ? null
                  : (
                    <span className={styles2.plf}>
                      {row.impotMoyenFoyerPlf}
                      €
                    </span>
                  )
              }
              &nbsp;
              <span className={styles2.reform}>
                {row.impotMoyenFoyerReforme}
                €
              </span>
            </TableCell>
            <TableCell classes={{ root: classes.cellStyle }}>
              <span className={styles2.base}>
                {row.recettesEtat}
                Md€
              </span>
              &nbsp;
              {
                row.recettesEtatPlf === null
                  ? null
                  : (
                    <span className={styles2.plf}>
                      {row.recettesEtatPlf}
                      Md€
                    </span>
                  )
              }
              &nbsp;
              <span className={styles2.reform}>
                {row.recettesEtatReforme}
                Md€
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

SimpopTableurInfosDeciles.propTypes = {
  classes: PropTypes.shape().isRequired,
  deciles: PropTypes.arrayOf(
    PropTypes.shape({
      apres: PropTypes.number.isRequired,
      avant: PropTypes.number.isRequired,
      plf: PropTypes.number,
      poids: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  frontieresDeciles: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default withStyles(styles)(SimpopTableurInfosDeciles);
