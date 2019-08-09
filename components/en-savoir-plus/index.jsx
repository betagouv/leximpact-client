/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  react/jsx-indent: [2, 2,{indentLogicalExpressions: false}],
  react/jsx-indent-props: [2, 2],
  "jsx-a11y/anchor-is-valid": [2, {
    "components": ["Link"],
    "specialLink": ["hrefLeft", "hrefRight"]
  }]
*/
import { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Link from "next/link";

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
              OPEN LexImpact est une interface qui permet de simuler, de façon
              rapide, l&apos;impact des réformes paramétriques de l&apos;impôt
              sur le revenu sur des foyers fiscaux types.
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <div>
              <Link href="/presentation-leximpact">
                  <button type="button">Présentation du service</button>
              </Link>
              <Link href="/conditions-d-utilisation-openleximpact">
                <button type="button">conditions d&apos;utilisation OPEN LexImpact</button>
              </Link>
              <Link href="/conditions-d-utilisation-leximpactpop">
                <button type="button">conditions d&apos;utilisation LexImpact POP</button>
              </Link>
              <Link href="/mentions-legales">
                <button type="button">Mentions légales</button>
              </Link>
              <Link href="/vos-retours">
              <button type="button">Vos retours sont précieux</button>
              </Link> 
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
