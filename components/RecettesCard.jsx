import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import { Icon } from "@iconify/react"
import classicalBuilding from "@iconify/icons-twemoji/classical-building"

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
        const { classes, delta } = this.props

        return (
            <Card>
                <CardContent>
                    <Icon icon={classicalBuilding} width="40" height="40" />
                    <Typography variant="body1">
                        Recettes de l&#39;État
                    </Typography>

                    <div>
                        <Typography
                            inline
                            variant="h3"
                            color="primary"
                            gutterBottom
                        >
                            {Math.round(this.props.impots_avant / 100000000)
                                / 10}
                        </Typography>
                        <Typography
                            inline
                            variant="h5"
                            className={
                                delta > -0.01
                                    ? this.props.classes.pom_verte
                                    : this.props.classes.pom_rouge
                            }
                            gutterBottom
                        >
                            {delta > -0.01 ? "+" : "-"}
                        </Typography>
                        <Typography
                            inline
                            variant="h3"
                            color="secondary"
                            gutterBottom
                        >
                            {Math.round(
                                Math.abs(this.props.delta / 100000000),
                            ) / 10}
                        </Typography>
                        <Typography
                            inline
                            variant="h5"
                            color="secondary"
                            gutterBottom
                        >
                            Md€
                        </Typography>
                    </div>

                    <div>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={this.updateStateRes}
                        >
                            Lancer la simulation
                        </Button>
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
