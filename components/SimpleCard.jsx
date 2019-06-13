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
import Tooltip from "@material-ui/core/Tooltip"
import Divider from '@material-ui/core/Divider';
import NativeSelect from "@material-ui/core/NativeSelect"

import { Icon, InlineIcon } from "@iconify/react"
import manCurlyHaired from "@iconify/react/twemoji/man-curly-haired"
import babyIcon from "@iconify/react/twemoji/baby"
import manWhiteHaired from "@iconify/react/twemoji/man-white-haired"
import womanCurlyHaired from "@iconify/react/twemoji/woman-curly-haired"
import womanWhiteHaired from "@iconify/react/twemoji/woman-white-haired"
// import palmTree from '@iconify/react/twemoji/palm-tree';
import desertIsland from "@iconify/react/twemoji/desert-island"

import CircularProgress from "@material-ui/core/CircularProgress"

const styles = theme => ({
    card: {
        minWidth: 50,
        paddingBottom: 0
    },
    cardcontent: {
      padding: 0,
      "&:last-child": {
        paddingBottom: 0
      }
    },
    titre: {
        fontSize: 11,
    },
    nativeselect: {
    },
    legende: {
        fontSize: 12,
        color: "#909090",
        fontFamily: "Lato",
        marginBottom: 10
    },
    div: {
        padding: 15,
    },
    chip: {
        marginTop: 10,
    }
})

function numberToRevenuparmois(rev) {
    return `${rev}€/mois`
}

class SimpleCard extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleOutreMerChange = this.handleOutreMerChange.bind(this)
        this.state = { loading: true }
    }

    handleChange = i => (event) => {
        this.props.onChange(i, event)
    }

    handleOutreMerChange = numcastype => (event) => {
        //console.log("je suis dans l'outremer",numcastype,event,this.props.desc_cas_type.outre_mer)
        this.props.onOutreMerChange(numcastype,3 - this.props.desc_cas_type.outre_mer)
    }

    roundedRevenues(revenumensuel) {
        const roundlevel = [100, 50, 100, 200, 500, 1000, 5000, 10000, 100000]
        const paliers = [900, 2000, 3000, 4000, 10000, 15000, 20000, 100000, 1000000]
        // for now the rounded revenues do not depend on the current value
        let currpal = 0
        const res = []
        for (let i = 500; currpal < paliers.length; i += roundlevel[currpal]) {
            res.push(<option value={i}>{`${i}€/mois`}</option>)
            if (i >= paliers[currpal]) {
                currpal++
            }
        }
        return res
    }

    render() {
        const {
            classes, index, desc_cas_type, impots_avant, impots_apres, loading,
        } = this.props

        const styleIcons = {
            width: "10em",
        }
        const { revenu } = desc_cas_type
        const revrounded = Math.round(revenu / 12)
        const revtodisp = numberToRevenuparmois(revrounded)
        const isret = !!desc_cas_type.nombre_declarants_retraites
        const manfirst = Math.random() < 0.49
        const coupledummsexe = Math.random() < 0.15
        const aretwo = desc_cas_type.nombre_declarants > 1
        const nbenfants = desc_cas_type.nombre_personnes_a_charge
        const isoutremer1 = (desc_cas_type.outre_mer == 1)
        const isoutremer2 = (desc_cas_type.outre_mer == 2)
        // bruts par an
        const icon1 = manfirst
            ? isret
                ? manWhiteHaired
                : manCurlyHaired
            : isret
                ? womanWhiteHaired
                : womanCurlyHaired
        const icon2 = coupledummsexe ?
            icon1
            : !manfirst
                ? isret
                    ? manWhiteHaired
                    : manCurlyHaired
                : isret
                    ? womanWhiteHaired
                    : womanCurlyHaired
        const babyicons = [...Array(nbenfants)].map((e, i) => (
            <Icon key={"baby" + i} icon={babyIcon} width="30" height="30" />
        ))
        return (
            <Card className={classes.card}>
                <CardContent className={classes.cardcontent}>
                    <div className={classes.div}>

                        {<Icon key="person1" icon={icon1} width="40" height="40" />}
                        {aretwo ? <Icon key="person2" icon={icon2} width="40" height="40" /> : ""}
                        {babyicons}
                    </div>

                    <div className={classes.div}>
                        <Tooltip
                            key="revenus"
                            placement="top"
                            title="Revenus bruts"
                            enterDelay={300}
                            leaveDelay={200}
                        >
                            <NativeSelect className={classes.nativeselect} value={revrounded} onChange={this.handleChange(index)}>
                                <option value={revrounded}>{`${revrounded}€/mois`}</option>
                                {this.roundedRevenues(revrounded)}
                                {" "}
                            </NativeSelect>
                        </Tooltip>
                        {isoutremer1 ? (
                             <Tooltip
                                key="outremer1"
                                placement="bottom"
                                title="Guyane ou Mayotte"
                                enterDelay={300}
                                leaveDelay={200}
                            >
                            <Chip
                                className={classes.chip}
                                onClick={this.handleOutreMerChange(index)}
                                clickable={true}
                                icon={<Icon icon={desertIsland} width="20" height="20" />}
                                label="Outre-mer n° 1"
                                onClick={this.handleOutreMerChange(index)}
                            />
                            </Tooltip>

                        ) : (isoutremer2 ? (
                            <Tooltip
                                key="outremer2"
                                placement="bottom"
                                title="Guyane ou Mayotte"
                                enterDelay={300}
                                leaveDelay={200}
                           >
                           <Chip
                               className={classes.chip}
                               icon={<Icon icon={desertIsland} width="20" height="20" />}
                               label="Outre-mer n° 2"
                               onClick={this.handleOutreMerChange(index)}
                           />
                           </Tooltip>
                       ) : (
                           ""
                       )
                        )}
                        {isret ? <Chip  className={classes.chip} label="Retraités" /> : ""}
                    </div>
                    <Divider/>
                    
                    <div className={classes.div}>

                        <Typography className={classes.legende}>Impôt sur le revenu par an</Typography>
                        <Typography inline={true} variant="h3" color="primary" gutterBottom>
                            {-impots_avant}
                        </Typography>
                        <Typography inline={true} variant="h5" color="primary" gutterBottom>
                            €
                        </Typography>
                        <br></br>
                        {loading ? (
                            <CircularProgress color="secondary" />
                        ) : (
                            <>
                                <Typography inline={true} variant="h3" color="secondary" gutterBottom>
                                    {-impots_apres}
                                </Typography>
                                <Typography inline={true} variant="h5" color="secondary" gutterBottom>
                                    €
                                </Typography>
                            </>
                        )}
                    </div>
                </CardContent>
            </Card>
        )
    }
}
SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleCard)
