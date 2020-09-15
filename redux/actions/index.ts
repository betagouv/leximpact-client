/* eslint-disable no-unused-vars */
import {
  AddCasTypeAction,
  AddCommuneTypeAction,
  InitCommunesTypesAction,
  RemoveCasTypeAction,
  RemoveCommuneTypeAction,
  UpdateCasTypeAction,
} from "./descriptions";
import {
  HideHelpWindowAction,
  HideInformationPanelAction,
  ShowHelpWindowAction,
} from "./display";
import {
  AddNewLineInParameterArrayAction,
  InitFakePlfAction,
  RemoveLastLineInParameterArrayAction,
  ResetAmendementToBaseAction,
  ResetAmendementToPlfAction,
  UpdateParameterAction,
} from "./parameters";
import {
  SimulateCasTypesFailureAction,
  SimulateCasTypesRequestAction,
  SimulateCasTypesSuccessAction,
  SimulateDotationsFailureAction,
  SimulateDotationsRequestAction,
  SimulateDotationsSuccessAction,
} from "./simulations";

export { default as logOut } from "./log-out";
export * from "./loading-etat";
export * from "./descriptions";
export * from "./display";
export * from "./parameters";
export * from "./simulations";
export { default as closeCurrentPopin } from "./popin-close-current";
export { default as showConnexionPopin } from "./popin-show-connexion";
export { default as addTranche } from "./articles-add-tranche";
export { default as removeTranche } from "./articles-remove-tranche";
export { default as fetchSimPop } from "./api-simpop";
export { default as fetchMetadataCasTypes } from "./api-metdata-cas-types";
export { default as updateReformeByName } from "./reforme-update-by-name";
export { default as connexionTokenLogin } from "./connexion-token-login";
export { default as connexionTokenLogout } from "./connexion-token-logout";
export { default as showAddCasTypesPopin } from "./popin-cas-types-add";
export { default as showEditCasTypesPopin } from "./popin-cas-types-edit";
export { default as showLogoutPopin } from "./popin-logout";
export { default as disabledEtat } from "./disabled-etat";

export type Action =
  AddCommuneTypeAction |
  RemoveCommuneTypeAction |
  AddCasTypeAction |
  UpdateCasTypeAction |
  RemoveCasTypeAction |
  ResetAmendementToBaseAction |
  ResetAmendementToPlfAction |
  InitFakePlfAction |
  UpdateParameterAction |
  AddNewLineInParameterArrayAction |
  RemoveLastLineInParameterArrayAction |
  SimulateDotationsFailureAction |
  SimulateDotationsRequestAction |
  SimulateDotationsSuccessAction |
  SimulateCasTypesFailureAction |
  SimulateCasTypesRequestAction |
  SimulateCasTypesSuccessAction |
  HideHelpWindowAction |
  HideInformationPanelAction |
  ShowHelpWindowAction |
  InitCommunesTypesAction;
