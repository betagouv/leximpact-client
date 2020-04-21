import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Link from "next/link";
import PropTypes from "prop-types";
import { PureComponent } from "react";

const styles = theme => ({
  alink: {
    color: "#565656",
    fontFamily: "Lora",
    fontSize: "18px",
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
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

class EnSavoiPlusComponent extends PureComponent {
  render() {
    const { classes, onClosePopin } = this.props;
    return (
      <div className={classes.container}>
        <IconButton className={classes.closeButton} onClick={onClosePopin}>
          <CloseIcon fontSize="small" />
        </IconButton>
        <Grid
          container
          alignItems="flex-start"
          direction="row"
          justify="space-between">
          <Grid item className={classes.gridItemText} xs={6}>
            <Typography>
              <span className={classes.spanTitreIntro}>
                LexImpact, c&apos;est quoi ?
              </span>
            </Typography>
            <Typography>
              LexImpact IR est une interface qui permet de
              <b>
              simuler, de façon rapide, l&apos;impact des réformes paramétriques de
              l&apos;impôt sur le revenu.
              </b>
              L&apos;estimation des impacts sur des foyers fiscaux types est accessible à
              tous ; les mesures d&apos;impacts sur la population
              française et les recettes de l&apos;État sont disponibles en accès restreint.
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
                    fullWidth
                    color="inherit"
                    size="large"
                    variant="outlined">
                    Présentation et conditions d&apos;utilisation
                  </Button>
                </Link>
              </div>

              <div className={classes.divButton}>
                <Link href="/mentions-legales">
                  <Button
                    fullWidth
                    color="inherit"
                    size="large"
                    variant="outlined">
                    Mentions légales
                  </Button>
                </Link>
              </div>

              <div className={classes.divButton}>
                <Button
                  fullWidth
                  color="inherit"
                  href="mailto:leximpact@an.fr"
                  size="large"
                  variant="outlined">
                  Une question ? Un bug ? Un avis ?
                </Button>
                <p className={classes.pAdresseMail}>
                  Écrivez-nous à leximpact@an.fr !
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

EnSavoiPlusComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  onClosePopin: PropTypes.func.isRequired,
};

export default withStyles(styles)(EnSavoiPlusComponent);
