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

const frontdec = [1000,20000,3000,4000,5000,6000,7000,8000,9000, 9999999999999]
function create_from_deciles(index, decile){
    return createData("Décile n°" + index, frontdec[index] + "€/mois", decile["avant"] ? Math.round((decile["apres"]/decile["avant"] -1)*100) : "N/A", 6.0, 24, 24, 24, 4.0 )
}


function SimpopTableurInfosDeciles({ classes, deciles }) {
  console.log("maprop", deciles);
  const rows = deciles.map((currElement, index) => {
    return create_from_deciles(index, currElement);
  });
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
              <span style={styles.plf}>{row.impactmoyenfoyer_plf}</span>
              &nbsp;<span style={styles.reforme}>{row.impactmoyenfoyer_reforme}</span>
            </TableCell>
            <TableCell align="center" padding="dense">
              <span style={styles.codeExistant}>{row.impotmoyenfoyer}</span>
              &nbsp;<span style={styles.plf}>{row.impotmoyenfoyer_plf}</span>
              &nbsp;<span style={styles.reforme}>{row.impotmoyenfoyer_reforme}</span>
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
