import { withStyles } from "@material-ui/core/styles"
import Breakpoint, { BreakpointProvider } from "react-socks"
import MaterialMenu from "@material-ui/core/Menu"
import MaterialMoreIcon from "@material-ui/icons/MoreVert"
import MaterialMenuItem from "@material-ui/core/MenuItem"
import MaterialIconButton from "@material-ui/core/IconButton"

const styles = {
    menu: {
        display: "flex",
    },
}

function Menu({
    classes, state, actions, children,
}) {
    const { isOpen, anchorEl } = state
    const { openMenu, closeMenu } = actions

    return (
        <BreakpointProvider>
            <Breakpoint medium up>
                <div className={classes.menu}>{children}</div>
            </Breakpoint>
            <Breakpoint small down>
                <div className={classes.menu}>
                    <MaterialIconButton
                        aria-owns={isOpen && "material-appbar"}
                        aria-haspopup="true"
                        onClick={openMenu}
                        color="inherit"
                    >
                        <MaterialMoreIcon />
                    </MaterialIconButton>
                    <MaterialMenu anchorEl={anchorEl} open={isOpen} onClose={closeMenu}>
                        {children.map(child => (
                            <MaterialMenuItem key={child.type} onClick={closeMenu}>
                                {child}
                            </MaterialMenuItem>
                        ))}
                    </MaterialMenu>
                </div>
            </Breakpoint>
        </BreakpointProvider>
    )
}

export default withStyles(styles)(Menu)
