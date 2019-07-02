/* @flow */

import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: ["\"Lato\", sans-serif", "Lora"].join(","),
        fontWeightMedium: 500,

        // TYPOGRAPHIE SIMULATEUR

        h1: {
            fontFamily: "Lato",
            fontSize: "24px",
            fontWeight: "light",
            textTransform: "uppercase",
        },

        h3: {
            fontFamily: "Lato",
            fontSize: "40px",
            fontWeight: "bold",
        },

        h4: {
            // header article//
            fontFamily: "Lato",
            fontSize: "20px",
        },

        h5: {
            // sert pour les +et- des cards//
            fontFamily: "Lato",
            fontSize: "34px",
            // fontWeight: 'light'
        },

        subtitle1: {
            fontSize: 12,
        },

        body1: {
            fontWeight: 500,
        },

        button: {
            fontStyle: "regular",
            fontWeight: 500,
        },

        caption: {
            fontWeight: 500,
        },

        overline: {
            fontWeight: 500,
        },

        // TYPOGRAPHIE ARTICLE

        h2: {
            fontFamily: "Lora",
            fontSize: "24px",
            fontWeight: "bold",
        },
        // h4: {},
        // h6: {},

        body2: {
            fontFamily: "Lora",
            fontSize: "18px",
        },

        subtitle2: {
            fontSize: 12,
        },
    },

    palette: {
        background: {
            paper: "rgba(255, 255, 255, 0.7)",
            default: "rgba(255, 255, 255, 1)",
        },
        primary: {
            light: "#FFFCB2",
            main: "#DED500",
            dark: "#A6A00C",
            contrastText: "#FFFFFF",
        },
        secondary: {
            light: "#FF6B6B",
            main: "#00A3FF",
            // dark: will be calculated from palette.secondary.main,
            contrastText: "#ffcc00",
        },

        error: {
            light: "#e57373",
            main: "rgba(255, 48, 73, 1)",
            dark: "#d32f2f",
            contrastText: "#fff",
        },
        text: {
            primary: "rgba(29, 29, 29, 0.87)",
            secondary: "rgba(24, 24, 24, 0.54)",
            disabled: "rgba(90, 90, 90, 0.72)",
            hint: "rgba(0, 0, 0, 0.38)",
        },
    },
})

export default theme
