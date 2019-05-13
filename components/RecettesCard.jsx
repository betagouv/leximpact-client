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
import { Icon, InlineIcon } from '@iconify/react';
import classicalBuilding from '@iconify/react/twemoji/classical-building';


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

    titre: {
        fontSize: 11,
    },
    pos: {
        marginBottom: 12,
    },

    plusoumoins: {
    // à changer : si c'est moins alors c'est vert et si c'est + alors c'est rouge
        color: "#FF0000",

    },

    div: {
        padding: 7,

    },

    button: {
        margin: theme.spacing.unit,
    },

    iconEtat:{
        fontSize: '50px',
    },

})


function RecettesCard(props) {
    const {
        classes} = props
    const styleIcons = {
        width: "10em",

    }

    // bruts par an

    return (

        <Card>
            <CardContent>
                <Icon icon={classicalBuilding} classeName={classes.iconEtat}/>
                <Typography variant="body1">
                            Recettes de l'État
                </Typography>

                <div>
                    <Typography inline variant="h3" color="primary" gutterBottom>
                                78
                    </Typography>
                    <Typography inline variant="h5" gutterBottom>
                                +
                    </Typography>
                    <Typography inline variant="h3" color="secondary" gutterBottom>
                               7
                    </Typography>
                    <Typography inline variant="h5" color="secondary" gutterBottom>
                                Md€
                    </Typography>
                </div>

                <div>
                    <Button variant="contained" color="secondary">
                        Lancer la simulation
                    </Button>

                </div>


            </CardContent>
        </Card>

    )
}

RecettesCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RecettesCard)
