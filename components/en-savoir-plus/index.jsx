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
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
    backgroundColor: "#FFFFFF",
  },
  spanTitreIntro: {
    fontFamily: "Lato",
    fontSize: "36px",
    fontWeight: "bold",
    color: "#565656",
  },
  alink: {
    fontFamily: "Lora",
    fontSize: "18px",
    color: "#565656",
  },
  gridItemText: {
    maxWidth: "600px",
    padding: "30px",
  },
  gridItemButtons: {
    maxWidth: "600px",
    padding: "30px",
  },
  divButton: {
    padding: "10px",
  },
  pAdresseMail: {
    textAlign: "center",
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
          <Grid item xs={6} className={classes.gridItemText}>
            <Typography>
              <span className={classes.spanTitreIntro}>
              OPEN LexImpact, c&apos;est&nbsp;quoi&nbsp;?
              </span>
            </Typography>
            <Typography>
                    OPEN LexImpact est une interface qui permet de simuler, de&#xA0;façon
                    rapide, l&apos;impact des réformes paramétriques de l&apos;impôt
                    sur le revenu sur des foyers fiscaux types.
            </Typography>
            <a href="/presentation-et-cgu" className={classes.alink}>en savoir plus</a>
          </Grid>
          <Grid item xs={6} className={classes.gridItemButtons}>
            <div>

              <div className={classes.divButton}>
                <Link href="/presentation-et-cgu">
                  <Button variant="outlined" color="inherit" size="large" fullWidth="true">Présentation et conditions d&apos;utilisation</Button>
                </Link>
              </div>

              <div className={classes.divButton}>
                <Link href="/mentions-legales">
                  <Button variant="outlined" color="inherit" size="large" fullWidth="true">Mentions légales</Button>
                </Link>
              </div>

              <div className={classes.divButton}>
                <Button
                  href="mailto:contact@leximpact.beta.gouv.fr"
                  variant="outlined"
                  color="inherit"
                  size="large"
                  fullWidth="true"
                >
                Une question ? Un bug ? Un avis ?
                </Button>
                <p className={classes.pAdresseMail}>
                Écrivez-nous à contact@leximpact.beta.gouv.fr !
                </p>
              </div>
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
