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
              <button type="button">En savoir plus sur LexImpact</button>
              <button type="button">Nos conditions d&apos;utilisation</button>
              <button type="button">Mentions légales</button>
              <button type="button">Vos retours sont précieux</button>
              <Link href="/example">
                <a>Example</a>
              </Link>
              <Link href="/nos-conditions-d-utilisation">
                <button type="button">Nos conditions d&apos;utilisation</button>
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
