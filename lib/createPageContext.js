import { createGenerateClassName } from "@material-ui/core/styles";
import { SheetsRegistry } from "jss";

import theme from "../styles/theme";

function createPageContext() {
  return {
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    theme,
  };
}

export default createPageContext;
