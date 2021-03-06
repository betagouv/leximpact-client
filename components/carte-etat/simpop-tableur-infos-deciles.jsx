import Typography from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";
import formatMilliers from "../utils/format-milliers";



const styles = {
  tableHeader: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "1.125em",
    height: "0px",
    verticalAlign: "top",
    textAlign: "center",
  },
  cellStyle: {
    padding: "0.6em",
    textAlign: "center",
  },
  infinity: {
    fontSize: "2em",
    fontWeight: "330",
    verticalAlign: "sub",
  },
  codeExistant: {
    backgroundColor: "#DED500",
    backgroundSize: "auto auto",
    color: "#000000",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "10px",
    marginLeft: "4px",
    marginRight: "4px",
    padding: "3px",
  },
  plf: {
    color: "#FF6B6B",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "10px",
    marginLeft: "4px",
    marginRight: "4px",
    padding: "3px",
  },
  reforme: {
    borderRadius: "0.3em",
    color: "#00A3FF",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "10px",
    marginLeft: "4px",
    marginRight: "4px",
    padding: "3px",
  },
};

const NOMBRE_DECILES = 10;
let id = 0;
function createData(
  decile,
  frontiereDecile,
  impactMoyenFoyer_plf,
  impactMoyenFoyer_reforme,
  impotMoyenFoyer,
  impotMoyenFoyer_plf,
  impotMoyenFoyer_reforme,
  recettesEtat,
  recettesEtat_plf,
  recettesEtat_reforme,
) {
  id += 1;
  return {
    decile,
    id,
    impactMoyenFoyer_plf,
    impactMoyenFoyer_reforme,
    impotMoyenFoyer,
    impotMoyenFoyer_plf,
    impotMoyenFoyer_reforme,
    recettesEtat,
    recettesEtat_plf,
    recettesEtat_reforme,
    frontiereDecile,
  };
}

function create_from_deciles(index, decile, frontiereDecile) {
  const impactMoyenFoyer_plf = decile.avant
    ? formatMilliers(Math.round((decile.plf / decile.avant - 1) * 100))
    : "-";
  const impactMoyenFoyer_reforme = decile.avant
    ? formatMilliers(Math.round((decile.apres / decile.avant - 1) * 100))
    : "-";
  const impotMoyenFoyer = formatMilliers(Math.round(decile.avant / decile.poids));
  const impotMoyenFoyer_plf = formatMilliers(Math.round(decile.plf / decile.poids));
  const impotMoyenFoyer_reforme = formatMilliers(Math.round(decile.apres / decile.poids));
  const recettesEtat = formatMilliers(Math.round(decile.avant / 10000000) / 100);
  const recettesEtat_plf = formatMilliers(Math.round(decile.plf / 10000000) / 100);
  const recettesEtat_reforme = formatMilliers(Math.round(decile.apres / 10000000) / 100);
  const frontiere = index + 1 < NOMBRE_DECILES ? formatMilliers(Math.round(frontiereDecile)) : "-";

  return createData(
    index + 1,
    formatMilliers(frontiere),
    impactMoyenFoyer_plf,
    impactMoyenFoyer_reforme,
    impotMoyenFoyer,
    impotMoyenFoyer_plf,
    impotMoyenFoyer_reforme,
    recettesEtat,
    recettesEtat_plf,
    recettesEtat_reforme,
  );
}

function imageDecile(id) {
  const imageId = `imageDecile${id}`;
  const imagePath = `/static/images/decile${id}.png`;
  return <img key={imageId} alt="" height="24" src={imagePath} width="24" />;
}

function SimpopTableurInfosDeciles({ classes, deciles, frontieres_deciles }) {
  const rows = deciles.map((currElement, index) => create_from_deciles(index, currElement, frontieres_deciles[index]));
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
              {row.frontiereDecile == "-" ? (
                <span className={classes.infinity}>∞</span>
              ) : (
                row.frontiereDecile
              )}
              €/an
            </TableCell>
            <TableCell classes={{ root: classes.cellStyle }}>
              <span style={styles.plf}>
                {row.impactMoyenFoyer_plf == "-"
                  ? NON_APPLICABLE
                  : `${row.impactMoyenFoyer_plf}%`}
              </span>
              &nbsp;
              <span style={styles.reforme}>
                {row.impactMoyenFoyer_reforme == "-"
                  ? NON_APPLICABLE
                  : `${row.impactMoyenFoyer_reforme}%`}
              </span>
            </TableCell>
            <TableCell classes={{ root: classes.cellStyle }}>
              <span style={styles.codeExistant}>
                {row.impotMoyenFoyer}
                €
              </span>
              &nbsp;
              <span style={styles.plf}>
                {row.impotMoyenFoyer_plf}
                €
              </span>
              &nbsp;
              <span style={styles.reforme}>
                {row.impotMoyenFoyer_reforme}
                €
              </span>
            </TableCell>
            <TableCell classes={{ root: classes.cellStyle }}>
              <span style={styles.codeExistant}>
                {row.recettesEtat}
                Md€
              </span>
              &nbsp;
              <span style={styles.plf}>
                {row.recettesEtat_plf}
                Md€
              </span>
              &nbsp;
              <span style={styles.reforme}>
                {row.recettesEtat_reforme}
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
  deciles: PropTypes.shape().isRequired,
  frontieres_deciles: PropTypes.shape().isRequired,
};

export default withStyles(styles)(SimpopTableurInfosDeciles);
