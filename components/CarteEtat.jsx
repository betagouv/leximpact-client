import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Chip from "@material-ui/core/Chip"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import withMobileDialog from "@material-ui/core/withMobileDialog"
import { Icon, InlineIcon } from "@iconify/react"
import classicalBuilding from "@iconify/icons-twemoji/classical-building"
import BarChart from "components/BarChart"
import "styles/chart.scss"

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
})

class RecettesCard extends React.Component {
    constructor(props) {
        super(props)
        this.updateStateRes = this.updateStateRes.bind(this)
    }

    updateStateRes(e) {
        this.props.onClick(e)
    }

    // bruts par an

    render() {
        const { classes, resultat } = this.props
        const delta = this.props.resultat.total.avant - this.props.resultat.total.apres
        return (
            <Card className={this.props.classes.card}>
                <CardContent>
                    <table>
                        <tr>
                            <td rowSpan="2">
                                <Icon
                                    icon={classicalBuilding}
                                    width="40"
                                    height="40"
                                />
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
                                    {Math.round(
                                        resultat.total.avant / 100000000,
                                    ) / 10}
                                </span>
                                <span className="legendeEtat avant">Md€</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className="legendeEtat apres chiffre">
                                    {Math.round(
                                        resultat.total.apres / 100000000,
                                    ) / 10}
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
                                variant="contained"
                                color="secondary"
                                onClick={this.updateStateRes}
                            >
                                Lancer la simulation
                            </Button>
                        </center>
                    </div>
                </CardContent>
            </Card>
        )
    }
}

RecettesCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RecettesCard)
