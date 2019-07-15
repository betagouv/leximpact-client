import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const styles = {
    links: {
        fontSize: "16px",
        fontWeight: "light",
        textTransform: "uppercase",
        textDecoration: "underline",
        textUnderlinePosition: "under",
        paddingleft: 30,
        paddingRight: 30,
        marginLeft: 30,
    },
}

function Links({ classes }) {
    return (
        <div>
            <Button color="inherit" className={classes.links}>
                Impôt sur le revenu
            </Button>
        </div>
    )
}

export default withStyles(styles)(Links)
