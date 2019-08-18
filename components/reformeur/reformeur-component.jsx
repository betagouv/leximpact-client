/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    max-nested-callbacks: [2, { "max": 4 }],
    react/jsx-closing-bracket-location: [2, {
        "nonEmpty": false,
        "selfClosing": false
    }],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"]
    }],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }],
    camelcase: 0,
*/
import PropTypes from "prop-types";
import { PureComponent } from "react";

import Articles from "../articles";
import ImpactCards from "../impact-cards";

class ReformeurComponent extends PureComponent {
  componentDidMount() {
    const { fetchMetadataCasTypesHandler } = this.props;
    fetchMetadataCasTypesHandler();
  }

  render() {
    return (
      <div className="main-index">
        <div className="clearfix">
          <div className="moitie-gauche">
            <Articles />
          </div>
          <div className="moitie-droite">
            <ImpactCards />
          </div>
        </div>
      </div>
    );
  }
}

ReformeurComponent.propTypes = {
  fetchMetadataCasTypesHandler: PropTypes.func.isRequired,
};

export default ReformeurComponent;
