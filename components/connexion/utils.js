import isemail from "isemail";
import get from "lodash/get";

import Config from "./config.json";

export function getDefaultRoleFromConfig() {
  const { roles } = Config;
  const defaultRoleKey = Object.keys(roles).find(key => roles[key].default);
  const roleObject = { ...roles[defaultRoleKey], key: defaultRoleKey };
  return roleObject;
}

export function parseFormValuesUserEmail(formValues) {
  // NOTE remplacer le domaine dans le champs email
  // si le champs email contient le domaine afficher une erreur
  const { domain, username } = formValues;
  const email = `${username}${domain}`;
  return email;
}

export const shouldShowFieldError = (meta) => {
  // NOTE documentation react-final-form#touched
  // https://github.com/final-form/final-form#touched-boolean
  const hasSubmitError = meta.submitError && !meta.dirtySinceLastSubmit;
  const showError = (hasSubmitError || meta.error) && meta.touched;
  return Boolean(showError);
};

export function updateDomainsWhenRoleChange(role) {
  // NOTE on met à jour le champ `domains`
  // le champ `domains` est du type hidden
  // il permet de gérer la liste des dommaines de mail a afficher
  const identifierPath = `roles.${role}.domains`;
  return get(Config, identifierPath);
}

export function validateEmailInputField(value) {
  let formErrorType = null;
  if (!value) formErrorType = "emptyEmailUsername";
  if (!formErrorType && isemail.validate(value)) formErrorType = "invalidEmail";
  if (!formErrorType) {
    // NOTE si aucune error
    // on doit retourner "undefined" pour react-final-form
    return undefined;
  }
  const identifierPath = `formErrors.${formErrorType}`;
  return get(Config, identifierPath);
}
