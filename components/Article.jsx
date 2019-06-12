import React from "react"
import { withStyles } from "@material-ui/core/styles"
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel"
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Fab from "@material-ui/core/Fab"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import DeleteIcon from "@material-ui/icons/Delete"
import textField from "@material-ui/core/TextField"
import SelectControl from "./SelectControl"


//attente minimum (si l'usage n'appuye pas sur Entrée) avant qu'une saisie ne déclenche un calcul
const WAIT_INTERVAL = 1000;
//Touche qui déclenche les calculs (13 = return)
const ENTER_KEY = 13;

const style = {
    Typography: { padding: "5px" },
    TypographyNouvelleTranche: { padding: "5px", color: "#00A3FF" },
    Typographybouton: { margin: "10px" },
    Button: {
        padding: "3px",
        margin: "10px",
    },
    VarCodeexistant: {
        fontWeight: "bold",
        color: "#A6A00C",
        textDecoration: "underline",
        lineHeight: "10px",
        padding: "8px",
    },
    InputSeuil: {
        fontSize: "20px",
        width: "70px",
        marginRight: "2px",
        marginLeft: "2px",
    },
    InputTaux: {
        fontSize: "20px",
        width: "30px",
        marginRight: "3px",
        marginLeft: "0px",
    },

    Div: {
        marginTop: "1em",
        marginLeft: "1.5em",
        marginRight: "1.5em",
        marginBottom: "1.5em",
    },
}

const ExpansionPanel = withStyles({
    root: {
        border: "0px solid rgba(0,0,0,.125)",
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0,
        },
        "&:before": {
            display: "none",
        },
    },
    expanded: {
        margin: "auto",
        padding: "1px",
    },
})(MuiExpansionPanel)

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: "rgba(0,0,0,0)",
        borderBottom: "0px solid rgba(0,0,0,.125)",
        marginBottom: -1,
        minHeight: 32,
        "&$expanded": {
            minHeight: 20,
        },
    },
    content: {
        "&$expanded": {
            margin: "3px 0",
            padding: "1px",
        },
    },
    expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />)

ExpansionPanelSummary.muiName = "ExpansionPanelSummary"

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing.unit * 2,
    },
}))(MuiExpansionPanelDetails)

class InputField extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.triggerChange = this.triggerChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.state= {value : props.value}
    }

    handleChange(e) {
        
        clearTimeout(this.timer);
        this.setState({ value:e.target.value });
        this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL,e.target.value,e.target.name);

    }

    triggerChange(value,name){
        this.props.onChange(value,name);
    }
    
    componentWillMount() {
        this.timer = null;
    }

    handleKeyDown(e) {
        if (e.keyCode === ENTER_KEY) {
            clearTimeout(this.timer);
            console.log("sending triggerchange meth2",this.state,this.props)
            this.triggerChange(this.state.value,this.props.name);
        }
    }

    render() {
        const {  name } = this.props
        const {value} = this.state
        return (
            <input
                type="text"
                value={value}
                name={name}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                size="4"
                style={this.props.style}
            />
        )
    }
}

class OutputField extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { value } = this.props
        return (
            <span inline="true" style={this.props.style} className="output-field">
                {value}
            </span>
        )
    }
}

class Article extends React.Component {
    constructor(props) {
        super(props)
        const nbt = props.reformebase.impot_revenu.bareme.seuils.length
        this.state = {
            expanded: "null", // état de l'extansion panel null = contenu
            reforme: props.reforme,
            basecode: props.reformebase, // Jamais modifié, utilisé pour montrer l'existant,
        }
        this.handleS1Change = this.handleS1Change.bind(this)
        this.handleAddTranche = this.handleAddTranche.bind(this)
        this.handleRemoveTranche = this.handleRemoveTranche.bind(this)
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        })
    }

    UpdateBareme = (i, value) => {
        const ref = this.state.reforme
        const list = this.state.reforme.impot_revenu.bareme.seuils.map((item, j) => {
            if (j === i) {
                return value
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
                return value
            }
            return item
        })
        ref.impot_revenu.bareme.taux = list
        this.setState({ reforme: ref })
    }

    handleS1Change(value,name) {
        this.props.onChange(value,name)
    }

    handleAddTranche(e) {
        this.props.addTranche(e)
    }

    handleRemoveTranche(e) {
        this.props.removeTranche(e)
    }

    alinea4() {
        const scelib = this.state.reforme.impot_revenu.decote.seuil_celib
        const scouple = this.state.reforme.impot_revenu.decote.seuil_couple
        const basescelib = this.state.basecode.impot_revenu.decote.seuil_celib
        const basescouple = this.state.basecode.impot_revenu.decote.seuil_couple

        return (
            <Typography variant="body2" color="inherit">
                4. a. Le montant de l'impôt résultant de l'application des dispositions précédentes
                est diminué, dans la limite de son montant, de la différence entre
                {" "}
                <OutputField value={basescelib} style={style.VarCodeexistant} />
                <InputField
                    value={scelib}
                    onChange={this.handleS1Change}
                    name="decote.seuil_celib"
                    style={style.InputSeuil}
                />
                € et les trois quarts de son montant pour les contribuables célibataires, divorcés
                ou veufs et de la différence entre
                <OutputField value={basescouple} style={style.VarCodeexistant} />
                <InputField
                    value={scouple}
                    onChange={this.handleS1Change}
                    name="decote.seuil_couple"
                    style={style.InputSeuil}
                />
                {" "}
                € et les trois quarts de son montant pour les contribuables soumis à imposition
                commune.
            </Typography>
        )
    }

    gimmeIRPartsOfArticle(i) {
        const s = this.state.reforme.impot_revenu.bareme.seuils
        const t = this.state.reforme.impot_revenu.bareme.taux
        const bases = this.state.basecode.impot_revenu.bareme.seuils
        const baset = this.state.basecode.impot_revenu.bareme.taux
        const nbt = s.length
        const styleAUtiliser = i > 4 ? style.TypographyNouvelleTranche : style.Typography
        // Part 1
        if (i == 0) {
            return (
                <Typography key={i} variant="body2" color="inherit" style={styleAUtiliser}>
                    {
                        "1. L'impôt est calculé en appliquant à la fraction de chaque part de revenu qui excède"
                    }
                    <OutputField value={bases[i]} style={style.VarCodeexistant} />
                    <InputField
                        value={s[i]}
                        onChange={this.handleS1Change}
                        name={`seuil${i}`}
                        style={style.InputSeuil}
                    />
                    {"€ le taux de :"}
                </Typography>
            )
        }
        // Last part
        if (i == nbt) {
            return (
                <Typography key={i} variant="body2" color="inherit" style={styleAUtiliser}>
                    {"– "}
                    <OutputField value={baset[i - 1]} style={style.VarCodeexistant} />
                    <InputField
                        value={t[i - 1]}
                        onChange={this.handleS1Change}
                        name={`taux${i - 1}`}
                        style={style.InputTaux}
                    />
                    {"% pour la fraction supérieure à "}
                    <OutputField value={s[i - 1]} />
                    {"€."}
                </Typography>
            )
        }
        // Other parts :
        return (
            <Typography key={i} variant="body2" color="inherit" style={styleAUtiliser}>
                –
                {" "}
                <OutputField value={baset[i - 1]} style={style.VarCodeexistant} />
                <InputField
                    value={t[i - 1]}
                    onChange={this.handleS1Change}
                    name={`taux${i - 1}`}
                    style={style.InputTaux}
                />
                % pour la fraction supérieure à
                {" "}
                <OutputField value={s[i - 1]} />
                € et inférieure ou égale à
                <OutputField value={bases[i]} style={style.VarCodeexistant} />
                <InputField
                    value={s[i]}
                    onChange={this.handleS1Change}
                    name={`seuil${i}`}
                    style={style.InputSeuil}
                />
                {" "}
                € ;
            </Typography>
        )
    }

    render() {
        const { expanded, reforme, basecode } = this.state
        const styleExpansionpanel = {
            padding: "1px",
        }

        const articleTranches = []
        for (let i = 0; i <= reforme.impot_revenu.bareme.seuils.length; i++) {
            articleTranches.push(this.gimmeIRPartsOfArticle(i))
        }

        return (
            <div style={style.Div}>
                {/* ` <Typography  inline variant="h2" color="#6C6C6C">
                    Article 197
              </Typography>

              <Typography inline variant="overline" color="inherit">
                    - Code général des impôts
              </Typography>

              <SelectControl /> */}

                <ExpansionPanel
                    style={style.Typography}
                    square
                    expanded={expanded === "panel1"}
                    onChange={this.handleChange("panel1")}
                >
                    <ExpansionPanelSummary
                        style={styleExpansionpanel}
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="body2" color="inherit">
                            I. En ce qui concerne les contribuables ...
                        </Typography>
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails style={styleExpansionpanel}>
                        <Typography variant="body2" color="inherit">
                            visés à l&#39;article 4 B, il est fait application des règles suivantes
                            pour le calcul de l&#39;impôt sur le revenu :
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                {articleTranches}
                <div>
                    <Fab style={style.Button} size="small" onClick={this.handleAddTranche} color="primary">
                        <AddIcon />
                    </Fab>
                    <Typography inline={true} variant="overline" color="primary" style={style.Typographybouton}>
                        Ajouter une tranche
                    </Typography>
                </div>

                <div>
                    <Fab style={style.Button} size="small" onClick={this.handleRemoveTranche} color="primary">
                        <DeleteIcon />
                    </Fab>
                    <Typography inline={true} variant="overline" color="primary" style={style.Typographybouton}>
                        Supprimer une tranche
                    </Typography>
                </div>

                <ExpansionPanel
                    style={style.Typography}
                    square
                    expanded={expanded === "panel1"}
                    onChange={this.handleChange("panel1")}
                >
                    <ExpansionPanelSummary
                        style={styleExpansionpanel}
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="body2" color="inherit">
                            2. La réduction d&#39;impôt résultant de l&#39;application du quotient
                            familial ...
                        </Typography>
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails style={styleExpansionpanel}>
                        <Typography variant="body2" color="inherit">
                            ... ne peut excéder 1 551 € par demi-part ou la moitié de cette somme
                            par quart de part s&#39;ajoutant à une part pour les contribuables
                            célibataires, divorcés, veufs ou soumis à l&#39;imposition distincte
                            prévue au 4 de l&#39;article 6 et à deux parts pour les contribuables
                            mariés soumis à une imposition commune.
                            <br />
                            Toutefois, pour les contribuables célibataires, divorcés, ou soumis à
                            l&#39;imposition distincte prévue au 4 de l&#39;article 6 qui répondent
                            aux conditions fixées au II de l&#39;article 194, la réduction
                            d&#39;impôt correspondant à la part accordée au titre du premier enfant
                            à charge est limitée à 3 660 € Lorsque les contribuables entretiennent
                            uniquement des enfants dont la charge est réputée également partagée
                            entre l&#39;un et l&#39;autre des parents, la réduction d&#39;impôt
                            correspondant à la demi-part accordée au titre de chacun des deux
                            premiers enfants est limitée à la moitié de cette somme. Par dérogation
                            aux dispositions du premier alinéa, la réduction d&#39;impôt résultant
                            de l&#39;application du quotient familial, accordée aux contribuables
                            qui bénéficient des dispositions des a, b et e du 1 de l&#39;article
                            195, ne peut excéder 927 € ;
                            <br />
                            Les contribuables qui bénéficient d'une demi-part au titre des a, b, c,
                            d, d bis, e et f du 1 ainsi que des 2 à 6 de l'article 195 ont droit à
                            une réduction d'impôt égale à 1 547 € pour chacune de ces demi-parts
                            lorsque la réduction de leur cotisation d'impôt est plafonnée en
                            application du premier alinéa. La réduction d'impôt est égale à la
                            moitié de cette somme lorsque la majoration visée au 2 de l'article 195
                            est de un quart de part. Cette réduction d'impôt ne peut toutefois
                            excéder l'augmentation de la cotisation d'impôt résultant du
                            plafonnement. Les contribuables veufs ayant des enfants à charge qui
                            bénéficient d'une part supplémentaire de quotient familial en
                            application du I de l'article 194 ont droit à une réduction d'impôt
                            égale à 1 728 € pour cette part supplémentaire lorsque la réduction de
                            leur cotisation d'impôt est plafonnée en application du premier alinéa
                            du présent 2. Cette réduction d'impôt ne peut toutefois excéder
                            l'augmentation de la cotisation d'impôt résultant du plafonnement.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel
                    style={style.Typography}
                    square
                    expanded={expanded === "panel3"}
                    onChange={this.handleChange("panel3")}
                >
                    <ExpansionPanelSummary
                        style={styleExpansionpanel}
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography variant="body2" color="inherit">
                            3. Le montant de l'impôt résultant de l'application des dispositions
                            précédentes est réduit de 30 %, dans la limite de 2 450 €...
                        </Typography>
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails style={styleExpansionpanel}>
                        <Typography variant="body2" color="inherit">
                            ...pour les contribuables domiciliés dans les départements de la
                            Guadeloupe, de la Martinique et de la Réunion ; cette réduction est
                            égale à 40 %, dans la limite de 4 050 €, pour les contribuables
                            domiciliés dans les départements de la Guyane et de Mayotte ;
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                {this.alinea4()}
            </div>
        )
    }
}

export default Article
