import withWidth from "@material-ui/core/withWidth";
import {
  Share as ShareIcon,
  ViewQuilt as ViewQuiltIcon,
} from "@material-ui/icons";
import { connect } from "react-redux";
import { compose } from "redux";

import { showAddImpactCardPopin } from "../../redux/actions";
import { useLargeView, useMobileView } from "../../redux/helpers";
import SimulationMenuBarComponent from "./simulation-menubar-component";

const MENU_ITEMS = [
  {
    action: showAddImpactCardPopin,
    disabled: false,
    key: "cas_types",
    label: "Ajouter un cas type",
  },
  {
    action: () => {
      /* TODO: creer une action redux pour cet item du menu */
    },
    disabled: true,
    key: "entree_imposition",
    label: "Visualiser le point d'entrée d'imposition",
  },
  {
    action: () => {
      /* TODO: creer une action redux pour cet item du menu */
    },
    disabled: true,
    key: "plafond_familial",
    label: "Visualiser les plafond du quotient familial",
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
  },
  {
    Icon: ViewQuiltIcon,
    action: () => {
      /* TODO: creer une action redux pour cet item du menu */
    },
    key: "simpop-workspace-button",
    label: "Espace de travail",
  },
];

const mapStateToProps = (state, props) => {
  const menuItems = [...MENU_ITEMS];
  const optionsMenuItems = [...OPTIONS_MENU_ITEMS];
  const isLargeView = useLargeView(props);
  const isMobileView = useMobileView(props);
  return {
    isLargeView,
    isMobileView,
    menuItems,
    optionsMenuItems,
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
