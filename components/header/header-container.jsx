import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Home from "components/header/home-view"
import Links from "components/header/links-view"
import Menu from "components/header/menu-container"
import styles from "components/header/header.scss"

function HeaderContainer() {
    return (
        <div className={styles.Header}>
            <AppBar position="static">
                <Toolbar>
                    <Home />
                    <Links />
                    <div className="expander" />
                    <Menu />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default HeaderContainer
