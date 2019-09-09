import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  tableStyle: {
    height: "0px",
  },
  cellStyle: {
    padding: "0px",
  },
}

let id = 0;
function createData(decile, salaire, impotmoyenfoyer, recettesetat) {
  id += 1;
  return {
    id,
    decile,
    salaire,
    impotmoyenfoyer,
    recettesetat,
  };
}

const rows = [
  createData("Décile n°1", 159, 6.0, 24, 4.0),
  createData("Décile n°2", 237, 9.0, 37, 4.3),
  createData("Décile n°3", 262, 16.0, 24, 6.0),
  createData("Décile n°4", 305, 3.7, 67, 4.3),
  createData("Décile n°5", 356, 16.0, 49, 3.9),
  createData("Décile n°6", 159, 6.0, 24, 4.0),
  createData("Décile n°7", 237, 9.0, 37, 4.3),
  createData("Décile n°8", 262, 16.0, 24, 6.0),
  createData("Décile n°9", 305, 3.7, 67, 4.3),
  createData("Décile n°10", 356, 16.0, 49, 3.9),
];

function SimpopTableurInfosDeciles({ classes }) {
  return (
    <Table>
      <TableHead>
        <TableRow classeName={classes.tableStyle}>
          <TableCell padding="dense">Décile</TableCell>
          <TableCell padding="dense" align="center">Salaire net /mois (jusqu&apos;à)</TableCell>
          <TableCell padding="dense" align="center">Impôt moyen des foyers /an</TableCell>
          <TableCell padding="dense" align="center">Total des recettes pour l&apos;État</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow classeName={classes.tableStyle} key={row.id}>
            <TableCell padding="dense" component="th" scope="row">
              {row.decile}
            </TableCell>
            <TableCell padding="dense" align="center">{row.salaire}</TableCell>
            <TableCell padding="dense" align="center">{row.impotmoyenfoyer}</TableCell>
            <TableCell padding="dense" align="center">{row.recettesetat}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

SimpopTableurInfosDeciles.propTypes = {
  classes: PropTypes.shape().isRequired,
}

export default withStyles(styles)(SimpopTableurInfosDeciles)
