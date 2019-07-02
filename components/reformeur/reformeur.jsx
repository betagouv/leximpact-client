import { Component, Fragment } from "react"
import fetch from "isomorphic-fetch"
import MediaQuery from "react-responsive"
import AppBar from "@material-ui/core/AppBar"
import MaterialTabs from "@material-ui/core/Tabs"
import MaterialTab from "@material-ui/core/Tab"
import SwipeableViews from "react-swipeable-views"
import { Paper } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import ArticleHeader from "components/ArticleHeader"
import Divider from "@material-ui/core/Divider"
import Impact from "components/Impact"
import Article from "components/Article"
import Tab from "components/reformeur/tab"
import initialState from "components/reformeur/reformeur-reducer"
import css from "components/reformeur/reformeur-styles.scss"

const styles = theme => ({
    paper: {
        padding: 0,
        margin: "1em",
    },
})

class Reformeur extends Component {
    constructor(props) {
        super(props)
        this.state = initialState
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
            const bodyreq = this.cas_types_defaut
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

    handleMaterialTabChange = (event, value) => {
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
        const bodyreq = this.cas_types_defaut
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
                <div className={css.reformeur}>
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
                                                    <MaterialTabs
                                                        value={this.state.indextab}
                                                        onChange={this.handleMaterialTabChange}
                                                        indicatorColor="primary"
                                                        textColor="primary"
                                                        variant="fullWidth"
                                                    >
                                                        <MaterialTab label="Loi" />
                                                        <MaterialTab label="Impacts" />
                                                    </MaterialTabs>
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
                                                    <Tab dir={theme.direction}>
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
                                                    </Tab>
                                                    <Tab dir={theme.direction}>
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
                                                    </Tab>
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
                                    <MaterialTabs
                                        value={this.state.indextab}
                                        onChange={this.handleMaterialTabChange}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        variant="fullWidth"
                                    >
                                        <MaterialTab label="Loi" />
                                        <MaterialTab label="Impacts" />
                                    </MaterialTabs>
                                </AppBar>
                                <SwipeableViews
                                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                                    index={this.state.indextab}
                                    onChangeIndex={this.handleIndexChange}
                                >
                                    <Tab dir={theme.direction}>
                                        <ArticleHeader />
                                        <Article
                                            reforme={this.state.reforme}
                                            reformebase={this.state.reformebase}
                                            onChange={this.handleChange}
                                            addTranche={this.addTranche}
                                        />
                                    </Tab>
                                    <Tab dir={theme.direction}>
                                        <Impact
                                            loading={this.state.loading}
                                            onRevenuChange={this.handleRevenuChange}
                                            onOutreMerChange={this.handleOutreMerChange}
                                            res_brut={this.state.res_brut}
                                            total_pop={this.state.total_pop}
                                            onClick={this.simPop}
                                            cas_types={this.state.cas_types}
                                        />
                                    </Tab>
                                </SwipeableViews>
                            </div>
                        </div>
                    </MediaQuery>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Reformeur)
