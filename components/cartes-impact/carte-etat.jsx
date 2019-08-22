import "styles/chart.scss";

import classicalBuilding from "@iconify/icons-twemoji/classical-building";
import { Icon } from "@iconify/react";
import {
  Button, Card, CardContent, Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import BarChart from "./bar-chart";

const styles = theme => ({
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

  pom_rouge: {
    color: "#FF0000",
  },
  pom_verte: {
    color: "#00FF00",
  },
  div: {
    padding: 7,
  },

  // button: {
  //      margin: theme.spacing.unit,
  // },

  iconEtat: {
    fontSize: "50px",
  },
  card: {
    maxWidth: 500,
  },
  titledadCarteEtat: {
    fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: "1.125em",
  },
  subtitleCarteEtat: {
    fontFamily: "Lato",
  },
});

class RecettesCard extends React.Component {
  constructor(props) {
    super(props);
    this.updateStateRes = this.updateStateRes.bind(this);
  }

  updateStateRes(e) {
    this.props.onClick(e);
  }

  // bruts par an

  render() {
    const { classes, resultat } = this.props;
    const delta = this.props.resultat.total.avant - this.props.resultat.total.apres;
    return (
      <Card className={this.props.classes.card}>
        <CardContent>
          <table>
            <tr>
              <td rowSpan="2">
                <Icon height="40" icon={classicalBuilding} width="40" />
              </td>
              <td className="titleCarteEtat">
                Recettes de l'État sur l'impôt sur le revenu
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
                <BarChart resultat={resultat} />
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

RecettesCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecettesCard);
