import theme from "styles/theme";
import { SheetsRegistry } from "jss";
import { createGenerateClassName } from "@material-ui/core/styles";

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default createPageContext;
