import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';




const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingBottom: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit * 2,
        margin: `${theme.spacing.unit / 2}em auto`,
        width: "25em",
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    titre: {
        fontSize: 11,
    },
    pos: {
        marginBottom: 12,
    },
})


function SimpleCard(props) {
    const { classes } = props
    const bull = <span className={classes.bullet}>•</span>

    return (
        
            <Card className={classes.card}>
                <CardContent>

                    <Chip label= "label"/>
                    <Typography variant="h2" color="secondary" gutterBottom>
                    350 €
                    </Typography>
                    
                </CardContent>
            </Card>
        
    )
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleCard)
