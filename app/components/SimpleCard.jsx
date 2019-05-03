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

import { Icon, InlineIcon } from '@iconify/react';
import manCurlyHaired from '@iconify/react/twemoji/man-curly-haired';
import babyIcon from '@iconify/react/twemoji/baby';
import manWhiteHaired from '@iconify/react/twemoji/man-white-haired';
import womanCurlyHaired from '@iconify/react/twemoji/woman-curly-haired';







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

    iconAdulte:{
        fontSize: '40px',
    },

    iconEnfant:{
        fontSize: '30px',
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
                    <Icon icon={babyIcon} className={classes.iconEnfant}/>
                    <Icon icon={manCurlyHaired} className={classes.iconAdulte}/>
                    <Icon icon={manWhiteHaired} className={classes.iconAdulte}/>
                    <Icon icon={womanCurlyHaired} className={classes.iconAdulte}/>
                    <Chip label= "label"/>
                    <Typography variant="h3" color="primary" gutterBottom>
                    350
                    </Typography>

                    <Typography variant="h5" color="primary" gutterBottom>
                    €
                    </Typography>
                    
                </CardContent>
            </Card>
        
    )
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleCard)
