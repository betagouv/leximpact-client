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
  },
};

let id = 0;
function createData(
  decile,
  salaire,
  impactmoyenfoyer_plf,
  impactmoyenfoyer_reforme,
  impotmoyenfoyer,
  impotmoyenfoyer_plf,
  impotmoyenfoyer_reforme,
  recettesetat,
) {
  id += 1;
  return {
    decile,
    id,
    impactmoyenfoyer_plf,
    impactmoyenfoyer_reforme,
    impotmoyenfoyer,
    impotmoyenfoyer_plf,
    impotmoyenfoyer_reforme,
    recettesetat,
    salaire,
  };
}

// #décile, salaire net/mois, impact foyer (plf, réforme), impôt moyen foyer (existant, plf, réforme), total recettes état
// source (2016) http://www.senat.fr/rap/l16-140-211/l16-140-2111.pdf
const frontdec = [
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
function create_from_deciles(index, decile) {
  return createData(
    index + 1,
    `${frontdec[index]}€/an`,
    decile.avant
      ? Math.round((decile.plf / decile.avant - 1) * 100)
      : "N/A",
    decile.avant
      ? Math.round((decile.apres / decile.avant - 1) * 100)
      : "N/A",
    Math.round(decile.avant / decile.poids),
    Math.round(decile.plf / decile.poids),
    Math.round(decile.apres / decile.poids),
    Math.round(decile.apres / 10000000) / 100,
  ); // Les recettes de l'Etat doivent être après réforme?
}

function imageDecile(id) {
  return (
    <img
      key={id}
      alt=""
      height="24"
      width="24"
      xlinkHref={`/static/images/decile${id}.png`}
    />
  );
}

function SimpopTableurInfosDeciles({ classes, deciles }) {
  const rows = deciles.map((currElement, index) => create_from_deciles(index, currElement));
  return (
    <Table>
      <TableHead>
        <TableRow className={classes.tableStyle}>
          <TableCell padding="dense">Décile</TableCell>
          <TableCell align="center" padding="dense">
            RFR (jusqu&apos;à)
          </TableCell>
          <TableCell align="center" padding="dense">
            Impact moyen sur le foyer (par rapport au code existant)
          </TableCell>
          <TableCell align="center" padding="dense">
            Impôt moyen des foyers /an
          </TableCell>
          <TableCell align="center" padding="dense">
            Total des recettes pour l&apos;État
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
              {row.salaire}
            </TableCell>
            <TableCell align="center" padding="dense">
              <span style={styles.plf}>{row.impactmoyenfoyer_plf}</span>
              &nbsp;
              <span style={styles.reforme}>{row.impactmoyenfoyer_reforme}</span>
            </TableCell>
            <TableCell align="center" padding="dense">
              <span style={styles.codeExistant}>{row.impotmoyenfoyer}</span>
              &nbsp;
              <span style={styles.plf}>{row.impotmoyenfoyer_plf}</span>
              &nbsp;
              <span style={styles.reforme}>{row.impotmoyenfoyer_reforme}</span>
            </TableCell>
            <TableCell align="center" padding="dense">
              {row.recettesetat}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

SimpopTableurInfosDeciles.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(SimpopTableurInfosDeciles);
