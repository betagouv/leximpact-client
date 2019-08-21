import { connect } from "react-redux";

import { showAddImpactCardPopin } from "../actions";
import PopSimulationBarComponent from "./pop-simulation-bar-component";

const MENU_ITEMS = [
  {
    action: showAddImpactCardPopin,
    disabled: false,
    key: "cas_types",
    label: "Ajouter un foyer fiscal type",
  },
  {
    action: () => {
      /* TODO: creer une action pour cet item du menu */
    },
    disabled: true,
    key: "entree_imposition",
    label: "Visualiser le point d'entrée d'imposition",
  },
  {
    action: () => {
      /* TODO: creer une action pour cet item du menu */
    },
    disabled: true,
    key: "plafond_familial",
    label: "Visualiser les plafond du quotient familial",
  },
];

const mapStateToProps = () => ({ menuItems: MENU_ITEMS });

const mapDispatchToProps = dispatch => ({
  handleMenuClick: (selected) => {
    const SelectedActionFunc = selected.action;
    dispatch(SelectedActionFunc());
  },
  handleSimulationClick: () => {},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopSimulationBarComponent);
