import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import PropTypes from "prop-types";
import { PureComponent } from "react";

const styles = theme => ({
  alink: {
    color: "#565656",
    fontFamily: "Lora",
    fontSize: "18px",
  },
  container: {
    backgroundColor: "#FFFFFF",
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
  },
  divButton: {
    padding: "10px",
  },
  gridItemButtons: {
    maxWidth: "600px",
    padding: "30px",
  },
  gridItemText: {
    maxWidth: "600px",
    padding: "30px",
  },
  pAdresseMail: {
    textAlign: "center",
  },
  spanTitreIntro: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "36px",
    fontWeight: "bold",
  },
});

class MentionsLegales extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Grid
          container
          alignItems="flex-start"
          direction="row"
          justify="space-between">
          <Grid item className={classes.gridItemText} xs={6}>
            <Typography>
              <span className={classes.spanTitreIntro}>
                OPEN LexImpact, c&apos;est&nbsp;quoi&nbsp;?
              </span>
            </Typography>
            <Typography>
              OPEN LexImpact est une interface qui permet de simuler,
              de&#xA0;façon rapide, l&apos;impact des réformes paramétriques de
              l&apos;impôt sur le revenu sur des foyers fiscaux types.
            </Typography>
            <a className={classes.alink} href="/presentation-et-cgu">
              en savoir plus
            </a>
          </Grid>
          <Grid item className={classes.gridItemButtons} xs={6}>
            <div>
              <div className={classes.divButton}>
                <Link href="/presentation-et-cgu">
                  <Button
                    color="inherit"
                    fullWidth="true"
                    size="large"
                    variant="outlined">
                    Présentation et conditions d&apos;utilisation
                  </Button>
                </Link>
              </div>

              <div className={classes.divButton}>
                <Link href="/mentions-legales">
                  <Button
                    color="inherit"
                    fullWidth="true"
                    size="large"
                    variant="outlined">
                    Mentions légales
                  </Button>
                </Link>
              </div>

              <div className={classes.divButton}>
                <Button
                  color="inherit"
                  fullWidth="true"
                  href="mailto:contact@leximpact.beta.gouv.fr"
                  size="large"
                  variant="outlined">
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
