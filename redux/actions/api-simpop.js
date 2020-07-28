import request from "../../components/common/utils/request";
import connexionTokenLogout from "./connexion-token-logout";
import { formatReforme } from "./format-reforme";
import { loadingEtatComplete, loadingEtatError, loadingEtatStart } from "./loading-etat";
import showLogoutPopin from "./popin-logout";

let currentTimestamp = null;

const TOKEN_ERROR_POSSIBLE_MESSAGES = [
  "Token invalid : not Decodable",
  "Token has expired",
];

const fetchSimPop = () => async (dispatch, getState) => {
  dispatch(loadingEtatStart());
  currentTimestamp = Date.now().toString();
  const { parameters, token } = getState();
  const body = {
    reforme: formatReforme(parameters.amendement),
    timestamp: currentTimestamp,
    token,
  };

  try {
    const { timestamp: tmstamp, ...rest } = await request.post("/calculate/simpop", body);
    if (tmstamp < currentTimestamp) return;
    currentTimestamp = null;
    dispatch(loadingEtatComplete());
    dispatch({ data: { ...rest }, type: "onSimPopFetchResult" });
  } catch (err) {
    dispatch(loadingEtatError(err));
    const isTokenError = TOKEN_ERROR_POSSIBLE_MESSAGES.indexOf(err) !== -1;
    if (isTokenError) {
      dispatch(connexionTokenLogout());
      dispatch(showLogoutPopin());
    } else {
      // eslint-disable-next-line no-console
      console.log("Can’t access  response. Blocked by browser?");
    }
  }
};

export default fetchSimPop;
