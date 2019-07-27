/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  react/jsx-indent: [2, 2,{indentLogicalExpressions: false}],
  react/jsx-indent-props: [2, 2]
*/
import { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const styles = theme => ({
  container: {
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
  },
});

class MentionsLegales extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justify="space-between"
        >
          <Grid item xs={6}>
            <Typography>
              LexImpact POP est un service dédié aux collaborateurs
              parlementaires et à leurs députés. Il permet d&apos;évaluer, de
              façon rapide, l&apos;impact des réformes socio-fiscales ; au
              travers d&apos;un simulateur dédié à l&apos;impôt sur le revenu et
              d&apos;un service de conciergerie.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <div>
              <button type="button">En savoir plus sur LexImpact</button>
              <button type="button">Nos conditions d&apos;utilisation</button>
              <button type="button">Vos données: notre priorités</button>
              <button type="button">Vos retours sont précieux</button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

MentionsLegales.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(MentionsLegales);
