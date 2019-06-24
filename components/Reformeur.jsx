import { Component, Fragment } from "react"
import fetch from "isomorphic-fetch"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import MediaQuery from "react-responsive"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import SwipeableViews from "react-swipeable-views"
import { Paper } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import ArticleHeader from "components/ArticleHeader"
import Divider from "@material-ui/core/Divider"
import Impact from "components/Impact"
import Article from "components/Article"

const styles = theme => ({
    paper: {
        padding: 0,
        margin: "1em",
    },
})

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
}

class Reformeur extends Component {
    constructor(props) {
        const baseseuils = [9964, 27519, 73779, 156244]
        const basetaux = [14, 30, 41, 45]

        super(props)
        this.state = {
            loading: false,
            reforme: {
                impot_revenu: {
                    bareme: {
                        seuils: baseseuils,
                        taux: basetaux,
                    },
                    decote: {
                        seuil_celib: 1196,
                        seuil_couple: 1970,
                    },
                },
            },
            reformebase: {
                impot_revenu: {
                    bareme: {
                        seuils: baseseuils,
                        taux: basetaux,
                    },
                    decote: {
                        seuil_celib: 1196,
                        seuil_couple: 1970,
                    },
                },
            },
            res_brut: {
                apres: {
                    0: 0,
                    1: -626,
                    2: 0,
                    3: 0,
                    4: -492,
                    5: 0,
                },
                avant: {
                    0: 0,
                    1: -626,
                    2: 0,
                    3: 0,
                    4: -492,
                    5: 0,
                },
                wprm: {
                    0: 1,
                    1: 1,
                    2: 1,
                    3: 1,
                    4: 1,
                    5: 1,
                },
            },
            total_pop: {
                total: {
                    avant: 78000000000,
                    apres: 78000000000,
                },deciles:[
                    {
                        apres: 0,
                        avant: 0,
                        poids: 2129176.8327294346
                    },
                    {
                        apres: 0,
                        avant: 0,
                        poids: 2128739.5320091583
                    },
                    {
                        apres: 0,
                        avant: 0,
                        poids: 2128952.831081888
                    },
                    {
                        apres: 0,
                        avant: 0,
                        poids: 2127477.6571005024
                    },
                    {
                        apres: 221925678.1096951,
                        avant: 221925678.1096951,
                        poids: 2129356.5962086627
                    },
                    {
                        apres: 1843405069.6027057,
                        avant: 1843405069.6027057,
                        poids: 2127290.129365916
                    },
                    {
                        apres: 4217383364.8533487,
                        avant: 4217383364.8533487,
                        poids: 2130386.094900362
                    },
                    {
                        apres: 7149983228.71065,
                        avant: 7149983228.71065,
                        poids: 2126351.0632205606
                    },
                    {
                        apres: 13066491960.283148,
                        avant: 13066491960.283148,
                        poids: 2127983.373504547
                    },
                    {
                        apres: 51500810698.44049,
                        avant: 51500810698.44049,
                        poids: 2125615.5569462525
                    }
                ]
            },
            indextab: 0,
            cas_types: [
                {
                    outre_mer: 0,
                    nombre_declarants: 1,
                    nombre_declarants_retraites: 0,
                    nombre_personnes_a_charge: 0,
                    revenu: 15600,
                },
                {
                    outre_mer: 0,
                    nombre_declarants: 1,
                    nombre_declarants_retraites: 0,
                    nombre_personnes_a_charge: 1,
                    revenu: 31200,
                },
                {
                    outre_mer: 0,
                    nombre_declarants: 2,
                    nombre_declarants_retraites: 0,
                    nombre_personnes_a_charge: 0,
                    revenu: 38400,
                },
                {
                    outre_mer: 0,
                    nombre_declarants: 2,
                    nombre_declarants_retraites: 2,
                    nombre_personnes_a_charge: 0,
                    revenu: 15600,
                },
                {
                    outre_mer: 0,
                    nombre_declarants: 2,
                    nombre_declarants_retraites: 0,
                    nombre_personnes_a_charge: 2,
                    revenu: 55200,
                },
                {
                    outre_mer: 1,
                    nombre_declarants: 2,
                    nombre_declarants_retraites: 0,
                    nombre_personnes_a_charge: 2,
                    revenu: 55200,
                },
            ],
            cas_types_defaut: true,
        }
        this.handleChange = this.handleChange.bind(this)
        this.addTranche = this.addTranche.bind(this)
        this.removeTranche = this.removeTranche.bind(this)
        this.simPop = this.simPop.bind(this)
        this.handleRevenuChange = this.handleRevenuChange.bind(this)
        this.handleOutreMerChange = this.handleOutreMerChange.bind(this)
    }

    componentDidMount() {
        const endpoint = this.endpoint()

        fetch(`${endpoint}/metadata/description_cas_types`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
        })
            .then(response => response.json())
            .then((json) => {
                this.setState({ cas_types: json })
            })
            .catch(() => console.log("Can’t access  response. Blocked by browser?")) // json.map(country => country.name))
        // .then(countryNames => this.setState({countryNames, loading: false}))
        // .then(json => this.setState({revenus_cas_types: json , loading : false} ))
        /**/
    }

    UpdateBareme = (i, value) => {
        const ref = this.state.reforme
        const list = this.state.reforme.impot_revenu.bareme.seuils.map((item, j) => {
            if (j === i) {
                const valchiffre = parseInt(value, 10)
                return isNaN(valchiffre) ? item : valchiffre
            }
            return item
        })
        ref.impot_revenu.bareme.seuils = list
        this.setState({ reforme: ref })
    }

    UpdateTaux = (i, value) => {
        const ref = this.state.reforme
        const list = this.state.reforme.impot_revenu.bareme.taux.map((item, j) => {
            if (j === i) {
                const valchiffre = parseInt(value, 10)
                return isNaN(valchiffre) ? item : valchiffre
            }
            return item
        })
        ref.impot_revenu.bareme.taux = list
        this.setState({ reforme: ref })
    }

    UpdateDecote = (dectype, value) => {
        const ref = this.state.reforme
        if (dectype == "seuil_couple") {
            ref.impot_revenu.decote.seuil_couple = parseInt(value, 10)
        }
        if (dectype == "seuil_celib") {
            ref.impot_revenu.decote.seuil_celib = parseInt(value, 10)
        }
        this.setState({ reforme: ref })
    }

    addTranche(e) {
        const refbase = this.state.reforme
        const newnbt = refbase.impot_revenu.bareme.seuils.length + 1
        const lastseuil = refbase.impot_revenu.bareme.seuils[newnbt - 2]
        refbase.impot_revenu.bareme.seuils = this.state.reforme.impot_revenu.bareme.seuils.concat(
            lastseuil + 1,
        )
        const lasttaux = refbase.impot_revenu.bareme.taux[newnbt - 2]
        refbase.impot_revenu.bareme.taux = this.state.reforme.impot_revenu.bareme.taux.concat(
            lasttaux,
        )
        this.setState({ reforme: refbase })
    }

    removeTranche(e) {
        const refbase = this.state.reforme
        const newnbt = refbase.impot_revenu.bareme.seuils.length - 1
        if (newnbt > 0) {
            refbase.impot_revenu.bareme.seuils = this.state.reforme.impot_revenu.bareme.seuils.slice(
                0,
                newnbt,
            )
            refbase.impot_revenu.bareme.taux = this.state.reforme.impot_revenu.bareme.taux.slice(
                0,
                newnbt,
            )
            this.setState({ reforme: refbase })
            const bodyreq = false//this.cas_types_defaut
                ? JSON.stringify({
                    deciles: false,
                    reforme: refbase,
                })
                : JSON.stringify({
                    reforme: refbase,
                    description_cas_types: this.state.cas_types,
                })
            this.updateCompare(bodyreq)
        }
    }

    handleTabChange = (event, value) => {
        this.setState({ indextab: value })
    }

    handleIndexChange = (index) => {
        this.setState({ indextab: index })
    }

    endpoint = () => process.env.API_URL

    updateCompare(bodyreq) {
        this.setState({ loading: true })
        fetch(`${this.endpoint()}/calculate/compare`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: bodyreq,
        })
            .then(response => response.json())
            .then((json) => {
                this.setState({ res_brut: json.res_brut, loading: false })
            })
    }

    handleChange(value, name) {
        const success = false
        const newvalue = value == "" ? 0 : value
        if (name.substring(0, 5) == "seuil") {
            const numb = parseInt(name.substring(5), 10)
            this.UpdateBareme(numb, newvalue)
            // success=true;
        }
        if (name.substring(0, 4) == "taux") {
            const numb = parseInt(name.substring(4), 10)
            this.UpdateTaux(numb, newvalue)
            // success=true;
        }
        if (name.substring(0, 6) == "decote") {
            const whichdecote = name.substring(7)
            this.UpdateDecote(whichdecote, newvalue)
            // success=true;
        }
        const bodyreq = false//this.cas_types_defaut
            ? JSON.stringify({
                deciles: false,
                reforme: this.state.reforme,
            })
            : JSON.stringify({
                reforme: this.state.reforme,
                description_cas_types: this.state.cas_types,
            })
        this.updateCompare(bodyreq)
    }

    simPop(e) {
        fetch(`${this.endpoint()}/calculate/compare`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                deciles: true,
                reforme: this.state.reforme,
            }),
        })
            .then(response => response.json())
            .then((json) => {
                this.setState({ total_pop: json })
            })
    }

    handleRevenuChange = (i, value) => {
        const arrayrev = this.state.cas_types
        arrayrev[i].revenu = value * 12
        this.setState({ cas_types: arrayrev, cas_types_defaut: false })
        const bodyreq = JSON.stringify({
            reforme: this.state.reforme,
            description_cas_types: arrayrev,
        })
        this.updateCompare(bodyreq)
    }

    handleOutreMerChange = (i, value) => {
        const arrayrev = this.state.cas_types
        arrayrev[i].outre_mer = value
        this.setState({ cas_types: arrayrev, cas_types_defaut: false })
        const bodyreq = JSON.stringify({
            reforme: this.state.reforme,
            description_cas_types: arrayrev,
        })
        this.updateCompare(bodyreq)
    }
    /* render2(){
        console.log("et je rends reformeur",this.state);
        return(
        <Fragment>
            <div className="main-index">
                <div className="moitie-gauche">
                    <Paper className={this.props.classes.article}>
                        <Article reformebase={this.state.reforme} onChange={this.handleChange} addTranche={this.addTranche}/>
                    </Paper>
                </div>
                <div className="moitie-droite">
                    <Impact res_brut={this.state.res_brut} total_pop={this.state.total_pop} onClick={this.simPop}/>
                </div>
                <div className="clearfix"></div>
            </div>
    } */

    render() {
        const { classes, theme } = this.props
        const desktop = 1280
        const tablet = 960 // and max-width: 1024px
        const phone = 600
        const bigscreen = 1920
        return (
            <Fragment>
                <div className="main-index">
                    {/* <div>You are a desktop or laptop</div> */}
                    <MediaQuery minDeviceWidth={phone + 1}>
                        {/* <MediaQuery minDeviceWidth={bigscreen}>
                             <div>You also have a huge screen</div>
                        </MediaQuery> */}
                        <MediaQuery maxWidth={phone}>
                            {(matches) => {
                                if (matches) {
                                    return (
                                        <div>
                                            {/* <div>You are sized like a tablet or mobile phone though</div> */}
                                            <div className={classes.root}>
                                                <AppBar position="static" color="default">
                                                    <Tabs
                                                        value={this.state.indextab}
                                                        onChange={this.handleTabChange}
                                                        indicatorColor="primary"
                                                        textColor="primary"
                                                        variant="fullWidth"
                                                    >
                                                        <Tab label="Loi" />
                                                        <Tab label="Impacts" />
                                                    </Tabs>
                                                </AppBar>
                                                <SwipeableViews
                                                    axis={
                                                        theme.direction === "rtl"
                                                            ? "x-reverse"
                                                            : "x"
                                                    }
                                                    index={this.state.indextab}
                                                    onChangeIndex={this.handleIndexChange}
                                                >
                                                    <TabContainer dir={theme.direction}>
                                                        <Paper>
                                                            <ArticleHeader />
                                                            <Divider />
                                                            <Article
                                                                reforme={this.state.reforme}
                                                                reformebase={this.state.reformebase}
                                                                onChange={this.handleChange}
                                                                addTranche={this.addTranche}
                                                                removeTranche={this.removeTranche}
                                                            />
                                                        </Paper>
                                                    </TabContainer>
                                                    <TabContainer dir={theme.direction}>
                                                        <Impact
                                                            loading={this.state.loading}
                                                            onRevenuChange={this.handleRevenuChange}
                                                            onOutreMerChange={
                                                                this.handleOutreMerChange
                                                            }
                                                            res_brut={this.state.res_brut}
                                                            total_pop={this.state.total_pop}
                                                            onClick={this.simPop}
                                                            cas_types={this.state.cas_types}
                                                        />
                                                    </TabContainer>
                                                </SwipeableViews>
                                            </div>
                                        </div>
                                    )
                                }
                                return (
                                    <div>
                                        {/* <div>You also have a good screen</div> */}
                                        <div className="moitie-gauche">
                                            <Paper className={this.props.classes.paper}>
                                                <ArticleHeader />
                                                <Divider />
                                                <Article
                                                    reforme={this.state.reforme}
                                                    reformebase={this.state.reformebase}
                                                    onChange={this.handleChange}
                                                    addTranche={this.addTranche}
                                                    removeTranche={this.removeTranche}
                                                />
                                            </Paper>
                                        </div>
                                        <div className="moitie-droite">
                                            <Impact
                                                loading={this.state.loading}
                                                onRevenuChange={this.handleRevenuChange}
                                                onOutreMerChange={this.handleOutreMerChange}
                                                res_brut={this.state.res_brut}
                                                total_pop={this.state.total_pop}
                                                onClick={this.simPop}
                                                cas_types={this.state.cas_types}
                                            />
                                        </div>
                                        <div className="clearfix" />
                                    </div>
                                )
                            }}
                        </MediaQuery>
                    </MediaQuery>

                    <MediaQuery maxDeviceWidth={phone}>
                        {/* <div>You are a tablet or mobile phone</div> */}
                        <div>
                            {/* <div>You are sized like a tablet or mobile phone though</div> */}
                            <div className={classes.root}>
                                <AppBar position="static" color="default">
                                    <Tabs
                                        value={this.state.indextab}
                                        onChange={this.handleTabChange}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        variant="fullWidth"
                                    >
                                        <Tab label="Loi" />
                                        <Tab label="Impacts" />
                                    </Tabs>
                                </AppBar>
                                <SwipeableViews
                                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                                    index={this.state.indextab}
                                    onChangeIndex={this.handleIndexChange}
                                >
                                    <TabContainer dir={theme.direction}>
                                        <ArticleHeader />
                                        <Article
                                            reforme={this.state.reforme}
                                            reformebase={this.state.reformebase}
                                            onChange={this.handleChange}
                                            addTranche={this.addTranche}
                                        />
                                    </TabContainer>
                                    <TabContainer dir={theme.direction}>
                                        <Impact
                                            loading={this.state.loading}
                                            onRevenuChange={this.handleRevenuChange}
                                            onOutreMerChange={this.handleOutreMerChange}
                                            res_brut={this.state.res_brut}
                                            total_pop={this.state.total_pop}
                                            onClick={this.simPop}
                                            cas_types={this.state.cas_types}
                                        />
                                    </TabContainer>
                                </SwipeableViews>
                            </div>
                        </div>
                    </MediaQuery>

                    {/* >>> Essayer de créer une média query spécial tablette
                   } <MediaQuery minDeviceWidth={768} maxDeviceWidth={1024} orientation={'portrait'}>
                        {/* <div>You are a tablet or mobile phone</div>
                        <div>
                            {/* <div>You are sized like a tablet or mobile phone though</div>
                            <div className={classes.root}>
                                <AppBar position="static" color="default">
                                    <Tabs
                                        value={this.state.indextab}
                                        onChange={this.handleTabChange}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        variant="fullWidth"
                                    >
                                        <Tab label="Loi" />
                                        <Tab label="Impacts" />
                                    </Tabs>
                                </AppBar>
                                <SwipeableViews
                                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                                    index={this.state.indextab}
                                    onChangeIndex={this.handleIndexChange}
                                >
                                    <TabContainer dir={theme.direction}>
                                        <ArticleHeader />
                                        <Article
                                            reforme={this.state.reforme}
                                            reformebase={this.state.reformebase}
                                            onChange={this.handleChange}
                                            addTranche={this.addTranche}
                                        />
                                    </TabContainer>
                                    <TabContainer dir={theme.direction}>
                                        <Impact
                                            loading={this.state.loading}
                                            onRevenuChange={this.handleRevenuChange}
                                            res_brut={this.state.res_brut}
                                            total_pop={this.state.total_pop}
                                            onClick={this.simPop}
                                            cas_types={this.state.cas_types}
                                        />
                                    </TabContainer>
                                </SwipeableViews>
                            </div>
                        </div>
                    </MediaQuery>

                    {/*
                <MediaQuery orientation="portrait">
                  <div>You are portrait</div>
                </MediaQuery>

                <MediaQuery orientation="landscape">
                  <div>You are landscape</div>
                </MediaQuery>

                <MediaQuery minResolution="2dppx">
                  <div>You are retina</div>
                </MediaQuery> */}
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Reformeur)
