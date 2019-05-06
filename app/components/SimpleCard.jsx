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
  
    titre: {
        fontSize: 11,
    },
    pos: {
        marginBottom: 12,
    },

    plusoumoins: {
    // à changer : si c'est moins alors c'est vert et si c'est + alors c'est rouge
        color: '#FF0000',
        
    }

 
})


function SimpleCard(props) {
    const { classes } = props
    const bull = <span className={classes.bullet}>•</span>

    var styleIcons = {
        width: '10em'
       
    }

    return (
        
            <Card className={classes.card}>
                <CardContent>

                    
                    <div>
                            <Chip label= "label"/>
                    </div>

                    <div>
                            <Typography inline variant="h3" color="primary" gutterBottom>
                                350
                            </Typography>

                            <Typography inline variant="h5" color="primary" gutterBottom>
                                €
                            </Typography>

                            <Typography inline variant="h5" className={classes.plusoumoins} gutterBottom>
                                +
                            </Typography>

                            <Typography inline variant="h3" color="secondary" gutterBottom>
                                28
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
