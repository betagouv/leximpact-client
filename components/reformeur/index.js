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
import { connect } from "react-redux";

import {
  fetchMetadataCasTypes,
  fetchCalculateCompare,
  updateRevenusAnnuelCasType,
  updateCasTypeOutreMer,
} from "../actions";

import ReformeurComponent from "./reformeur-component";

const mapStateToProps = state => ({
  casTypes: state.casTypes,
});

const mapDispatchToProps = dispatch => ({
  updateCalculateCompareHandler: (requestBody) => {
    const action = fetchCalculateCompare(requestBody);
    dispatch(action);
  },

  updateCasTypeOutreMerHandler: (casTypeIndex, casTypeOutreMerIndex) => {
    const action = updateCasTypeOutreMer(casTypeIndex, casTypeOutreMerIndex);
    dispatch(action);
  },

  updateCasTypeRevenusHandler: (casTypeIndex, casTypeRevenusMensuel) => {
    // apres selection du revenu dans la carte du cas type
    // on met a jour le revenu annuel pour ce cas type
    // dans le state de l'application
    const action = updateRevenusAnnuelCasType(
      casTypeIndex,
      casTypeRevenusMensuel,
    );
    dispatch(action);
  },

  fetchMetadataCasTypesHandler: () => {
    const action = fetchMetadataCasTypes();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReformeurComponent);
