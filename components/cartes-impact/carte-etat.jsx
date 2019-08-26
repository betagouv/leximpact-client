// import "styles/chart.scss";

import classicalBuilding from "@iconify/icons-twemoji/classical-building";
import { Icon } from "@iconify/react";
import {
  Button, Card, CardContent, Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

// import BarChart from "./bar-chart";

const styles = () => ({
  // root: {
  // ...theme.mixins.gutters(),
  // paddingBottom: theme.spacing.unit * 2,
  // paddingTop: theme.spacing.unit * 2,
  // margin: `${theme.spacing.unit / 2}em auto`,
  // width: "25em",
  // },
  // card: {
  // minWidth: 275,
  // },

  // titre: {
  // fontSize: 11,
  // },
  // pos: {
  //    marginBottom: 12,
  // },
  card: {
    maxWidth: 500,
  },

  div: {
    padding: 7,
  },
  iconEtat: {
    fontSize: "50px",
  },
  pom_rouge: {
    color: "#FF0000",
  },
  pom_verte: {
    color: "#00FF00",
  },
  subtitleCarteEtat: {
    fontFamily: "Lato",
  },

  // button: {
  //      margin: theme.spacing.unit,
  // },
  titledadCarteEtat: {
    fontFamily: "Lato",
    fontSize: "1.125em",
    fontWeight: "bold",
  },
});

class CarteEtat extends React.Component {
  constructor(props) {
    super(props);
    this.updateStateRes = this.updateStateRes.bind(this);
  }

  updateStateRes(e) {
    const { onClick } = this.props;
    onClick(e);
  }

  // bruts par an

  render() {
    const { classes, resultat } = this.props;
    // const { classes } = this.props;
    // const delta = resultat.total.avant - resultat.total.apres;
    return (
      <Card className={classes.card}>
        <CardContent>
          <table>
            <tr>
              <td rowSpan="2">
                <Icon height="40" icon={classicalBuilding} width="40" />
              </td>
              <td className="titleCarteEtat">
                Recettes de l&apos;État sur l&apos;impôt sur le revenu
              </td>
            </tr>
            <tr>
              <td>
                <Typography variant="body1">
                  {" "}
                  par décile de population et par an
                </Typography>
              </td>
            </tr>
          </table>
          <table>
            <tr height="15%">
              <td rowSpan="4" width="150%">
                {/* <BarChart resultat={resultat} /> */}
              </td>
              <td />
            </tr>
            <tr>
              <td>
                <span className="legendeEtat avant chiffre">
                  {Math.round(resultat.total.avant / 100000000) / 10}
                </span>
                <span className="legendeEtat avant">Md€</span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="legendeEtat apres chiffre">
                  {Math.round(resultat.total.apres / 100000000) / 10}
                </span>
                <span className="legendeEtat apres">Md€</span>
              </td>
            </tr>
            <tr height="15%">
              <td />
            </tr>
          </table>
          <div>
            <center>
              <Button
                color="secondary"
                variant="contained"
                onClick={this.updateStateRes}>
                Lancer la simulation
              </Button>
            </center>
          </div>
        </CardContent>
      </Card>
    );
  }
}

CarteEtat.propTypes = {
  classes: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
  resultat: PropTypes.shape({
    total: PropTypes.shape({
      apres: PropTypes.number.isRequired,
      avant: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withStyles(styles)(CarteEtat);
