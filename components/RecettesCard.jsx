import classicalBuilding from "@iconify/icons-twemoji/classical-building";
import { Icon } from "@iconify/react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { PureComponent } from "react";

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

  // button: {
  //      margin: theme.spacing.unit,
  // },
});

class RecettesCard extends PureComponent {
  render() {
    const {
      classes, delta, impots_avant, onClick,
    } = this.props;
    return (
      <Card>
        <CardContent>
          <Icon height="40" icon={classicalBuilding} width="40" />
          <Typography variant="body1">Recettes de l&#39;État</Typography>

          <div>
            <Typography gutterBottom inline color="primary" variant="h3">
              {Math.round(impots_avant / 100000000) / 10}
            </Typography>
            <Typography
              gutterBottom
              inline
              className={delta > -0.01 ? classes.pom_verte : classes.pom_rouge}
              variant="h5">
              {delta > -0.01 ? "+" : "-"}
            </Typography>
            <Typography gutterBottom inline color="secondary" variant="h3">
              {Math.round(Math.abs(delta / 100000000)) / 10}
            </Typography>
            <Typography gutterBottom inline color="secondary" variant="h5">
              Md€
            </Typography>
          </div>

          <div>
            <Button color="secondary" variant="contained" onClick={onClick}>
              Lancer la simulation
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
}

RecettesCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  delta: PropTypes.shape().isRequired,
  impots_avant: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(RecettesCard);
