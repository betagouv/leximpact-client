import Typography from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";

const styles = {
  cellStyle: {
    padding: "0px",
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
  tableStyle: {
    height: "0px",
    verticalAlign: "center",
  },
};

let id = 0;
function createData(
  decile,
  revenuFiscalDeReference,
  impactMoyenFoyer_plf,
  impactMoyenFoyer_reforme,
  impotMoyenFoyer,
  impotMoyenFoyer_plf,
  impotMoyenFoyer_reforme,
  recettesEtat,
  recettesEtat_plf,
  recettesEtat_reforme
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
    revenuFiscalDeReference,
  };
}


function create_from_deciles(index, decile) {
  // source (2016) http://www.senat.fr/rap/l16-140-211/l16-140-2111.pdf
  const revenusFiscauxDeReference = [
    3569,
    9053,
    12811,
    16167,
    19300,
    23895,
    29520,
    37720,
    52716,
    "∞",
  ];

  var impactMoyenFoyer_plf = decile.avant ? Math.round((decile.plf / decile.avant - 1) * 100) : "-";
  var impactMoyenFoyer_reforme = decile.avant ? Math.round((decile.apres / decile.avant - 1) * 100) : "-";
  var impotMoyenFoyer = Math.round(decile.avant / decile.poids);
  var impotMoyenFoyer_plf = Math.round(decile.plf / decile.poids);
  var impotMoyenFoyer_reforme = Math.round(decile.apres / decile.poids);
  var recettesEtat = Math.round(decile.avant / 10000000) / 100;
  var recettesEtat_plf = Math.round(decile.plf / 10000000) / 100;
  var recettesEtat_reforme = Math.round(decile.apres / 10000000) / 100;

  return createData(
    index + 1,
    revenusFiscauxDeReference[index],
    impactMoyenFoyer_plf,
    impactMoyenFoyer_reforme,
    impotMoyenFoyer,
    impotMoyenFoyer_plf,
    impotMoyenFoyer_reforme,
    recettesEtat,
    recettesEtat_plf,
    recettesEtat_reforme
  ); // Les recettes de l'Etat doivent être après réforme?
}

function imageDecile(id) {
  const imageId = `imageDecile${id}`;
  const imagePath = `/static/images/decile${id}.png`;
  return (
    <img key={imageId} alt="" height="24" width="24" src={imagePath} />
  );
}

function SimpopTableurInfosDeciles({ classes, deciles }) {
  console.log(deciles)
  const rows = deciles.map((currElement, index) => create_from_deciles(index, currElement));
  return (
    <Table>
      <TableHead>
        <TableRow className={classes.tableStyle}>
          <TableCell align="center" padding="none">
            <p>
              <b>Décile</b>
            </p>
          </TableCell>
          <TableCell align="center" padding="none">
            <p>
              <b>Revenu fiscal de référence</b>
            </p>
            <p>(jusqu&apos;à)</p>
          </TableCell>
          <TableCell align="center" padding="none">
            <p>
              <b>Impact moyen sur le foyer </b>
            </p>
            <p>(par rapport au code existant)</p>
          </TableCell>
          <TableCell align="center" padding="none">
            <p>
              <b>Impôt moyen des foyers</b>
            </p>
            <p>(par an)</p>
          </TableCell>
          <TableCell align="center" padding="none">
            <p>
              <b>Recettes pour l&apos;État</b>
            </p>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id} className={classes.tableStyle}>
            <TableCell component="th" padding="dense" scope="row">
              {imageDecile(row.decile)}
            </TableCell>
            <TableCell align="center" padding="dense">
              {row.revenuFiscalDeReference}€/an
            </TableCell>
            <TableCell align="center" padding="dense">
              <span style={styles.plf}>
                {row.impactMoyenFoyer_plf}%
              </span>
              &nbsp;
              <span style={styles.reforme}>
                {row.impactMoyenFoyer_reforme}%
              </span>
            </TableCell>
            <TableCell align="center" padding="dense">
              <span style={styles.codeExistant}>
                {row.impotMoyenFoyer}€
              </span>
              &nbsp;
              <span style={styles.plf}>
                {row.impotMoyenFoyer_plf}€
              </span>
              &nbsp;
              <span style={styles.reforme}>
                {row.impotMoyenFoyer_reforme}€
              </span>
            </TableCell>
            <TableCell align="center" padding="dense">
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
};

export default withStyles(styles)(SimpopTableurInfosDeciles);
