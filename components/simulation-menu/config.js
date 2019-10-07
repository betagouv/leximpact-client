import {
  AddCircleOutline as AddCircleOutlineIcon,
  Share as ShareIcon,
  ViewQuilt as ViewQuiltIcon,
} from "@material-ui/icons";

import { exportDocument, showAddCasTypesPopin } from "../../redux/actions";

const config = {
  optionsMenuItems: [
    {
      Icon: ShareIcon,
      action: exportDocument,
      key: "simpop-share-button",
      label: "Partager",
      shortLabel: "Partager",
    },
    {
      Icon: ViewQuiltIcon,
      /* TODO: creer une action redux pour cet item du menu */
      action: () => ({ type: "undefined" }),
      key: "simpop-workspace-button",
      label: "Espace de travail",
      shortLabel: "Espace de travail",
    },
  ],
  outilsMenuItems: [
    {
      Icon: AddCircleOutlineIcon,
      action: showAddCasTypesPopin,
      disabled: true,
      key: "cas_types",
      label: "Ajouter un cas type",
      shortLabel: "Cas type",
    },
    {
      /* TODO: creer une action redux pour cet item du menu */
      action: () => ({ type: "undefined" }),
      disabled: true,
      key: "entree_imposition",
      label: "Visualiser le point d'entrée d'imposition",
      shortLabel: "Point entrée imposition",
    },
    {
      /* TODO: creer une action redux pour cet item du menu */
      action: () => ({ type: "undefined" }),
      disabled: true,
      key: "plafond_qf",
      label: "Visualiser les plafonds du quotient familial",
      shortLabel: "Plafonds QF",
    },
  ],
};

export default config;
