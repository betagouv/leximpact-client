import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";
import { compose } from "redux";

import Config from "./config";
import SimulationMenuBarComponent from "./simulation-menubar-component";

const OUTILS_MENU_ITEMS = [
  {
    Icon: AddCircleOutlineIcon,
    action: showAddImpactCardPopin,
    disabled: false,
    key: "cas_types",
    label: "Ajouter un cas type",
    shortLabel: "Cas type",
  },
  {
    action: () => {
      /* TODO: creer une action redux pour cet item du menu */
    },
    disabled: true,
    key: "entree_imposition",
    label: "Visualiser le point d'entrée d'imposition",
    shortLabel: "Point entrée imposition",
  },
  {
    action: () => {
      /* TODO: creer une action redux pour cet item du menu */
    },
    disabled: true,
    key: "plafond_familial",
    label: "Visualiser les plafond du quotient familial",
    shortLabel: "Plafonds QF",
  },
];

const OPTIONS_MENU_ITEMS = [
  {
    Icon: ShareIcon,
    action: () => {
      /* TODO: creer une action redux pour cet item du menu */
    },
    key: "simpop-share-button",
    label: "Partager",
    shortLabel: "Partager",
  },
  {
    Icon: ViewQuiltIcon,
    action: () => {
      /* TODO: creer une action redux pour cet item du menu */
    },
    key: "simpop-workspace-button",
    label: "Espace de travail",
    shortLabel: "Espace de travail",
  },
];

function useSimulatioButtonAsMobile(width) {
  return width === "xs" || width === "sm" || width === "md";
}

function useOptionsAsMobile(width) {
  return width !== "lg" || width !== "xl";
}

function useOutilsAsMobile(width) {
  return width === "xs" || width === "sm" || width === "md";
}

const mapStateToProps = (state, { width }) => {
  const outilsItems = [...Config.outilsMenuItems];
  const optionsItems = [...Config.optionsMenuItems];
  const showOutilsAsMobile = useOutilsAsMobile(width);
  const showOptionsAsMobile = useOptionsAsMobile(width);
  const showSimulatioButtonAsMobile = useSimulatioButtonAsMobile(width);
  return {
    optionsItems,
    outilsItems,
    showOptionsAsMobile,
    showOutilsAsMobile,
    showSimulatioButtonAsMobile,
  };
};

const mapDispatchToProps = dispatch => ({
  handleItemWithActionClick: (selected) => {
    // click sur un element du menu options ou du menu deroulant
    const isReduxAction = Boolean(selected.action && selected.action.type);
    if (!isReduxAction) return;
    const SelectedActionFunc = selected.action;
    dispatch(SelectedActionFunc());
  },
  handleSimulationClick: () => {},
});

export default compose(
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(SimulationMenuBarComponent);
