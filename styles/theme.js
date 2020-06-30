/* eslint-disable sort-keys */
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["\"Lato\", sans-serif", "Lora"].join(","),
    fontWeightMedium: 500,

    // TYPOGRAPHIE SIMULATEUR

    h1: {
      fontFamily: "Lato",
      fontSize: "36px",
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

    button: {
      fontStyle: "regular",
      fontWeight: 700,
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

  },

  palette: {
    background: {
      paper: "rgba(255, 255, 255, 0.7)",
      default: "rgba(255, 255, 255, 1)",
    },
    primary: {
      light: "#FFFCB2",
      main: "#DED500",
      dark: "#000000",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#FF6B6B",
      main: "#343BFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#FFFFFF",
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
});

export default theme;
