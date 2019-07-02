import Breakpoint, { BreakpointProvider } from "react-socks"
import Menu from "@material-ui/core/Menu"
import MoreIcon from "@material-ui/icons/MoreVert"
import MenuItem from "@material-ui/core/MenuItem"
import IconButton from "@material-ui/core/IconButton"
import styles from "components/header/menu.scss"

function MenuView({ state, actions, children }) {
    const { isOpen, anchorEl } = state
    const { openMenu, closeMenu } = actions

    return (
        <BreakpointProvider>
            <Breakpoint medium up>
                <div className={styles.Menu}>
                    {children}
                </div>
            </Breakpoint>
            <Breakpoint small down>
                <div className={styles.Menu}>
                    <IconButton
                        aria-owns={isOpen && "material-appbar"}
                        aria-haspopup="true"
                        onClick={openMenu}
                        color="inherit"
                    >
                        <MoreIcon />
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={isOpen} onClose={closeMenu}>
                        {Children.map(children, child => (
                            <MenuItem key={child.type} onClick={closeMenu}>
                                {child}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </Breakpoint>
        </BreakpointProvider>
    )
}

export default MenuView
