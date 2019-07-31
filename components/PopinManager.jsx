/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }]
*/
import PropTypes from "prop-types";
import { flow, get } from "lodash";
import { Fragment, PureComponent } from "react";
import { withRouter } from "next/router";
import { Drawer } from "@material-ui/core";

import EnSavoirPlus from "./en-savoir-plus";
import { closeCurrentOpenedRoutingPopin } from "./actions";

class PopinManager extends PureComponent {
  renderEnSavoirPlus = (popinType) => {
    const showEnSavoirPlus = popinType === "en-savoir-plus";
    return (
      <Drawer
        anchor="bottom"
        variant="temporary"
        open={showEnSavoirPlus}
        onClose={closeCurrentOpenedRoutingPopin}
      >
        <EnSavoirPlus />
      </Drawer>
    );
  }

  render() {
    const { router } = this.props;
    const pathString = "query.showPopin";
    const popinType = get(router, pathString, false);
    return <Fragment>{this.renderEnSavoirPlus(popinType)}</Fragment>;
  }
}

PopinManager.propTypes = {
  router: PropTypes.shape().isRequired,
};

export default flow(withRouter)(PopinManager);
