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


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingBottom: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit * 2,
        margin: `${theme.spacing.unit / 2}em auto`,
        width: "25em",
    },
    card: {
        minWidth: 50,
    },

    titre: {
        fontSize: 11,
    },
    pos: {
        marginBottom: 12,
    },

    pom_plus: {
        color: "#FF0000",


    },    
	pom_moins: {
        color: "#00FF00",
    },

    div: {
        padding: 7,

    },


})


function SimpleCard(props) {
    const {
        classes, revenu, impots_avant, delta,
    } = props
    const bull = <span className={classes.bullet}>•</span>

    const styleIcons = {
        width: "10em",

    }

    // bruts par an

    return (

        <Card className={classes.card}>
            <CardContent>
                <div className={classes.div}>
                            "Ici les icons"
                </div>

                <div className={classes.div}>
                    <Chip label={`${revenu} €`} />
                </div>

                <div className={classes.div}>
                    <Typography inline variant="h3" color="primary" gutterBottom>
                        {-impots_avant}
                    </Typography>
                    <Typography inline variant="h5" className={delta > 0 ? classes.pom_moins : classes.pom_plus} gutterBottom>
                        {(delta > 0 ? "-" : "+")}
                    </Typography>
                    <Typography inline variant="h3" color="secondary" gutterBottom>
                        {Math.abs(delta)}
                    </Typography>
                    <Typography inline variant="h5" color="secondary" gutterBottom>
                                €
                    </Typography>
                </div>

            </CardContent>
        </Card>

    )
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleCard)
