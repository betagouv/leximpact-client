import PersonAdd from "@material-ui/icons/Person"
import IconButton from "@material-ui/core/IconButton"
import { Fragment } from "react"

function Signup() {
    return (
        <Fragment>
            <IconButton color="inherit">
                <PersonAdd />
            </IconButton>
            <p>S’enregistrer</p>
        </Fragment>
    )
}

export default Signup
