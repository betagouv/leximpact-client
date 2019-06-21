import Person from "@material-ui/icons/Person"
import IconButton from "@material-ui/core/IconButton"
import { Fragment } from "react"

function Login() {
    return (
        <Fragment>
            <IconButton color="inherit">
                <Person />
            </IconButton>
            <p>Connexion</p>
        </Fragment>
    )
}

export default Login
