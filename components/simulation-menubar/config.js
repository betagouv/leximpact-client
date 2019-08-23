import {
  AddCircleOutline as AddCircleOutlineIcon,
  Share as ShareIcon,
  ViewQuilt as ViewQuiltIcon,
} from "@material-ui/icons";

import { showAddImpactCardPopin } from "../../redux/actions";

const config = {
  optionsMenuItems: [
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
  ],
  outilsMenuItems: [
    {
      Icon: AddCircleOutlineIcon,
      action: showAddImpactCardPopin,
      disabled: false,
      key: "cas_types",
      label: "Ajouter un foyer fiscal type",
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
  ],
};

export default config;
