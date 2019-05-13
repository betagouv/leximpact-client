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

import { Icon, InlineIcon } from '@iconify/react';
import manCurlyHaired from '@iconify/react/twemoji/man-curly-haired';
import babyIcon from '@iconify/react/twemoji/baby';
import manWhiteHaired from '@iconify/react/twemoji/man-white-haired';
import womanCurlyHaired from '@iconify/react/twemoji/woman-curly-haired';
import womanWhiteHaired from '@iconify/react/twemoji/woman-white-haired';


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

    plusoumoins: {
    // à changer : si c'est moins alors c'est vert et si c'est + alors c'est rouge
        color: "#FF0000",
    },

    div: {
        padding: 7,

    },

    iconAdulte:{
        fontSize: '50px',
    },

    iconEnfant:{
        fontSize: '30px',
    }

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
                    <Icon icon={babyIcon} className={classes.iconEnfant}/>
                    <Icon icon={manCurlyHaired} className={classes.iconAdulte}/>
                    <Icon icon={manWhiteHaired} className={classes.iconAdulte}/>
                    <Icon icon={womanCurlyHaired} className={classes.iconAdulte}/>
                    <Icon icon={womanWhiteHaired} className={classes.iconAdulte}/>
                </div>

                <div className={classes.div}>
                    <Chip label={`${revenu} €`} />
                </div>

                <div className={classes.div}>
                    <Typography inline variant="h3" color="primary" gutterBottom>
                        {-impots_avant}
                    </Typography>
                    <Typography inline variant="h5" className={classes.plusoumoins} gutterBottom>
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
