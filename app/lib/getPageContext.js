import { SheetsRegistry } from "jss"
import { createMuiTheme } from "@material-ui/core/styles"
import { createGenerateClassName } from "@material-ui/core/styles"


// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({

    typography: {
        useNextVariants: true,
        fontFamily: [
            '"Lato", sans-serif', 'Lora'
        ].join(','),
        fontWeightMedium: 500,
        
        //TYPOGRAPHIE SIMULATEUR

        //h1: {}, 

        h3: {fontFamily: 'Lato',
            fontSize: '40px',
            fontWeight: 'bold'},

        h5: {fontFamily: 'Lato',
            fontSize: '34px',
            fontWeight: 'light'},

        subtitle1: {
            fontSize: 12,
        },

        body1: {
            fontWeight: 500,
        },
      
        button: {
            fontStyle: 'Italic',
            fontWeight: 500,
        },

        caption: {
            fontWeight: 500,
        },

        overline: {
            fontWeight: 500,
        },

        //TYPOGRAPHIE ARTICLE

        h2: {
            fontFamily: 'Lora',
            fontSize: '32px',
            fontWeight: 'bold'
        },
        //h4: {},
        //h6: {},

        body2: {
            fontFamily: 'Lora',
            fontSize: '18px'
        },


        subtitle2: {
            fontSize: 12,
        },


    },

    palette: {
        background:{
            paper:"rgba(255, 255, 255, 0.7)",
            default:"rgba(255, 255, 255, 1)"
        },
        primary: {
            light: "#FFFCB2",
            main: "#E5DC07",
            dark: "#A6A00C",
            contrastText: "#FFFFFF",
        },
        secondary: {
            light: "#FF6B6B",
            main: "#00A3FF",
            // dark: will be calculated from palette.secondary.main,
            contrastText: "#ffcc00",
        },
        reforme1: { 
            backgroundColor: '#E44D69',
            color: '#000',
        },
        error:{
            light:"#e57373",
            main:"rgba(255, 48, 73, 1)",
            dark:"#d32f2f","contrastText":"#fff"
        },
        text:{
            primary:"rgba(29, 29, 29, 0.87)",
            secondary:"rgba(24, 24, 24, 0.54)",
            disabled:"rgba(90, 90, 90, 0.72)",
            hint:"rgba(0, 0, 0, 0.38)",
        },
    },
});

function createPageContext() {
    return {
        theme,
        // This is needed in order to deduplicate the injection of CSS in the page.
        sheetsManager: new Map(),
        // This is needed in order to inject the critical CSS.
        sheetsRegistry: new SheetsRegistry(),
        // The standard class name generator.
        generateClassName: createGenerateClassName(),
    }
}

export default function getPageContext() {
    // Make sure to create a new context for every server-side request so that data
    // isn't shared between connections (which would be bad).
    if (!process.browser) {
        return createPageContext()
    }

    // Reuse context on the client-side.
    if (!global.__INIT_MATERIAL_UI__) {
        global.__INIT_MATERIAL_UI__ = createPageContext()
    }

    return global.__INIT_MATERIAL_UI__
}
