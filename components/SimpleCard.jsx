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
import Tooltip from '@material-ui/core/Tooltip';

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

    pom_rouge: {
        color: "#FF0000",


    },    
	pom_verte: {
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
    const roundlevel = (revenu>21000) ? ((revenu>36000)? ((revenu>120000)? 10000:500):100):50;

    const revtodisp = Math.round(revenu/12/roundlevel)*roundlevel + "€/mois"
    // bruts par an
    return (

        <Card className={classes.card}>
            <CardContent>
                <div className={classes.div}>
                    <Icon icon={babyIcon} width="30" height="30"/>
                    <Icon icon={manCurlyHaired} width="40" height="40"/>
                    <Icon icon={manWhiteHaired} width="40" height="40"/>
                    <Icon icon={womanCurlyHaired} width="40" height="40"/>
                    <Icon icon={womanWhiteHaired} width="40" height="40"/>
                </div>

                <div className={classes.div}>
                    <Tooltip title="Ici on explique exactement le revenu utilisé même si c super superlong" enterDelay={300} leaveDelay={200}>
                      <Chip label={revtodisp} />
                    </Tooltip>
                </div>

                <div className={classes.div}>
                    <Typography inline variant="h3" color="primary" gutterBottom>
                        {-impots_avant}
                    </Typography>
                    <Typography inline variant="h5" className={delta > 0 ? classes.pom_verte : classes.pom_rouge} gutterBottom>
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
