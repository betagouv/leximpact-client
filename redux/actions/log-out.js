import Cookies from "js-cookie";

import { TOKEN_NAME } from "../set-auth-cookie";

const logOut = () => {
  Cookies.remove(TOKEN_NAME);
  document.location.reload();
};

export default logOut;
