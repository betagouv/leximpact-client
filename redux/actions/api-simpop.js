import request from "../../components/utils/request";
import connexionTokenLogout from "./connexion-token-logout";
import { loadingComplete, loadingError, loadingStart } from "./loading";
import showLogoutPopin from "./popin-logout";

let currentTimestamp = null;

const TOKEN_ERROR_POSSIBLE_MESSAGES = [
  "Token invalid : not Decodable",
  "Token has expired",
];

const fetchSimPop = () => (dispatch, getState) => {
  dispatch(loadingStart());
  currentTimestamp = Date.now().toString();
  const { reforme, token } = getState();
  const body = { reforme, timestamp: currentTimestamp, token };
  const promise = request
    .post("/calculate/simpop", body)
    .then(({ timestamp: tmstamp, ...rest }) => {
      if (tmstamp < currentTimestamp) return;
      currentTimestamp = null;
      dispatch(loadingComplete());
      dispatch({ data: { ...rest }, type: "onSimPopFetchResult" });
    })
    .catch((err) => {
      dispatch(loadingError(err));
      const isTokenError = TOKEN_ERROR_POSSIBLE_MESSAGES.indexOf(err) !== -1;
      if (isTokenError) {
        dispatch(connexionTokenLogout());
        dispatch(showLogoutPopin());
      } else {
        // eslint-disable-next-line no-console
        console.log("Can’t access  response. Blocked by browser?");
      }
    });
  return promise;
};

export default fetchSimPop;
