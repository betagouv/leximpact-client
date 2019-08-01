import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Typography } from "@material-ui/core"

const styles = {
    root: {
        flexGrow: 1,
        paddingTop: "0px",
    },

    typo1: {
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "#6C6C6C",
    },

    typo2: {
        color: "#6C6C6C",
        paddingLeft: "6px",
    },
}

function SimpleAppBar(props) {
    const { classes } = props

    return (
        <div className={classes.root}>
            <AppBar
                position="relative"
                style={{ background: "#FFFFFF", boxShadow: "none" }}
            >
                <Toolbar>
                    <Typography className={classes.typo1} variant="h4" color="inherit">
            Tranches / décote
                    </Typography>
                    <Typography className={classes.typo2} variant="body2" color="inherit">
            - Article 197 du CGI
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

SimpleAppBar.propTypes = {
    classes: PropTypes.shape().isRequired,
}

export default withStyles(styles)(SimpleAppBar)
