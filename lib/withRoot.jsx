import React from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider } from "@material-ui/core/styles/";
import CssBaseline from "@material-ui/core/CssBaseline";
import getPageContext from "lib/getPageContext";
import createPageContext from "lib/createPageContext";

function withRoot(Component) {
  let pageContext = null;
  class WithRoot extends React.Component {
    constructor(props, context) {
      super(props, context);

      const { pageContext: propsPageContext } = this.props;
      pageContext = propsPageContext || getPageContext(process.browser, createPageContext);
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      // MuiThemeProvider makes the theme available down the React tree thanks to React
      // context.
      return (
        <MuiThemeProvider
          theme={pageContext.theme}
          sheetsManager={pageContext.sheetsManager}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to */}
          {/* build upon. */}
          <CssBaseline />
          <Component {...this.props} />
        </MuiThemeProvider>
      );
    }
  }

  WithRoot.defaultProps = {
    pageContext: null,
  };

  WithRoot.propTypes = {
    pageContext: PropTypes.shape(),
  };

  WithRoot.getInitialProps = (ctx) => {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithRoot;
}

export default withRoot;
