import Cookies from "js-cookie";

export const CAS_TYPES_NAME = "cas_types";
export const TOKEN_NAME = "pop_auth_token";

const COOKIE_BLACKLIST = [
  // liste de noms de cookie qui
  // peuvent etre sauvegarde uniqument
  // si l'user est connecté
  CAS_TYPES_NAME,
];

const isCookieBlacklisted = name => COOKIE_BLACKLIST.indexOf(name) !== -1;

export const setAuthCookie = (name, value) => {
  if (name !== TOKEN_NAME) {
    const isLogged = Cookies.get(TOKEN_NAME) !== undefined;
    if (!isLogged && isCookieBlacklisted(name)) return;
  }
  Cookies.set(name, value);
};
