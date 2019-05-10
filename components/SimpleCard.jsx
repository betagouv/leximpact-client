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
import NativeSelect from '@material-ui/core/NativeSelect';

import { Icon, InlineIcon } from '@iconify/react';
import manCurlyHaired from '@iconify/react/twemoji/man-curly-haired';
import babyIcon from '@iconify/react/twemoji/baby';
import manWhiteHaired from '@iconify/react/twemoji/man-white-haired';
import womanCurlyHaired from '@iconify/react/twemoji/woman-curly-haired';
import womanWhiteHaired from '@iconify/react/twemoji/woman-white-haired';
//import palmTree from '@iconify/react/twemoji/palm-tree';
import desertIsland from '@iconify/react/twemoji/desert-island';

import CircularProgress from '@material-ui/core/CircularProgress';



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

function numberToRevenuparmois(rev){
    return rev+"€/mois"
}


class SimpleCard extends React.Component {



  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.state={loading:true}
  }

    handleChange = i => event => {
        this.props.onChange(i,event);
      };

    roundedRevenues(revenumensuel){
        const roundlevel = [100,50,100,200,500,1000,5000,10000,100000]
        const paliers = [900,2000,3000,4000,10000,15000,20000,100000,1000000]
        //for now the rounded revenues do not depend on the current value
        var currpal=0;
        var res=[]
        for (var i=500;currpal<paliers.length;i+=roundlevel[currpal]){
            res.push( <option value={i}>{(i)+"€/mois"}</option>);
            if (i>=paliers[currpal]) {currpal++;
            }
        }
        return res;
    }


    render(){
        const {
            classes, index, desc_cas_type, impots_avant, delta,loading
        } = this.props;
        const bull = <span className={classes.bullet}>•</span>

        const styleIcons = {
            width: "10em",

        }
        const revenu=desc_cas_type.revenu
        const revrounded=Math.round(revenu/12)
        const revtodisp = numberToRevenuparmois(revrounded);
        const isret= !!(desc_cas_type.nombre_declarants_retraites);
        const manfirst= Math.random()<0.49;
        const aretwo=desc_cas_type.nombre_declarants>1;
        const nbenfants=desc_cas_type.nombre_personnes_a_charge;
        const isguadeloupe=desc_cas_type.guadeloupe;
        // bruts par an
        const icon1=manfirst?(isret?manWhiteHaired:manCurlyHaired):(isret?womanWhiteHaired:womanCurlyHaired);
        const icon2=(!manfirst)?(isret?manWhiteHaired:manCurlyHaired):(isret?womanWhiteHaired:womanCurlyHaired);
        const babyicons=[...Array(nbenfants)].map((e, i) => <Icon icon={babyIcon} width="30" height="30"/>)
        return (

            <Card className={classes.card}>
                <CardContent>
                    <div className={classes.div}>
                        {<Icon icon={icon1} width="40" height="40"/>}
                        {aretwo?<Icon icon={icon2} width="40" height="40"/>:""}
                        {babyicons}
                    </div>

                    <div className={classes.div}>
                        <Tooltip placement="top" title="Revenus bruts" enterDelay={300} leaveDelay={200}>
                        <NativeSelect
                            value={revrounded}
                            onChange={this.handleChange(index)}
                        >
                            <option value={revrounded}>{(revrounded)+"€/mois"}</option>
                            {this.roundedRevenues(revrounded)}                            }
                        </NativeSelect>
                        </Tooltip>
                        {isguadeloupe?<Chip icon={<Icon icon={desertIsland} width="20" height="20"/>} label="Guadeloupe" />:""}
                        {isret?<Chip label="Retraités" />:""}

                    </div>
                    {loading?
                    <CircularProgress color="secondary"/>:
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
                    </div>}

                </CardContent>
            </Card>

        )
    }
}
SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleCard)
