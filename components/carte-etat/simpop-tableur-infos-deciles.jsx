import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from "prop-types";

const styles = {
  tableStyle: {
    height: "0px",
  },
  cellStyle: {
    padding: "0px",
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
    id,
    decile,
    salaire,
    impactmoyenfoyer_plf,
    impactmoyenfoyer_reforme,
    impotmoyenfoyer,
    impotmoyenfoyer_plf,
    impotmoyenfoyer_reforme,
    recettesetat,
  };
}

// #décile, salaire net/mois, impact foyer (plf, réforme), impôt moyen foyer (existant, plf, réforme), total recettes état
const rows = [
  createData("Décile n°1", "1 135€/mois", 6.0, 6.0, 24, 24, 24, 4.0),
  createData("Décile n°2", "1 455€/mois", 9.0, 9.0, 37, 37, 37, 4.3),
  createData("Décile n°3", "1 760€/mois", 16.0, 16.0, 24, 24, 24, 6.0),
  createData("Décile n°4", "2 115€/mois", 3.7, 3.7, 67, 67, 67, 4.3),
  createData("Décile n°5", "2 503€/mois", 16.0, 16.0, 49, 49, 49, 3.9),
  createData("Décile n°6", "2 941€/mois", 6.0, 6.0, 24, 24, 24, 4.0),
  createData("Décile n°7", "3 440€/mois", 9.0, 9.0, 37, 37, 37, 4.3),
  createData("Décile n°8", "4 112€/mois", 16.0, 16.0, 24, 24, 24, 6.0),
  createData("Décile n°9", "5 267€/mois", 3.7, 3.7, 67, 67, 67, 4.3),
  createData("Décile n°10", "∞€/mois", 16.0, 16.0, 49, 49, 49, 3.9),
];

function SimpopTableurInfosDeciles({ classes }) {
  return (
    <Table>
      <TableHead>
        <TableRow className={classes.tableStyle}>
          <TableCell padding="dense">Décile</TableCell>
          <TableCell align="center" padding="dense">
            Salaire net /mois (jusqu&apos;à)
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
              {row.decile}
            </TableCell>
            <TableCell align="center" padding="dense">
              {row.salaire}
            </TableCell>
            <TableCell align="center" padding="dense">
              {row.impactmoyenfoyer_plf}
              &nbsp;{row.impactmoyenfoyer_reforme}
            </TableCell>
            <TableCell align="center" padding="dense">
              {row.impotmoyenfoyer}
              &nbsp;{row.impotmoyenfoyer_plf}
              &nbsp;{row.impotmoyenfoyer_reforme}
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
