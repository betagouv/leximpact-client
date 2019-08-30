import request from "../../components/utils/request";
import { loadingComplete, loadingError, loadingStart } from "./loading";

const fetchSimPop = () => (dispatch, getState) => {
  dispatch(loadingStart());
  const timestamp = Date.now().toString();
  const { reforme, token } = getState();
  const body = JSON.stringify({ reforme, timestamp, token });

  return request
    .post("/calculate/simpop", body)
    .then((payload) => {
      dispatch(loadingComplete());
      dispatch({ data: payload, type: "onSimPopFetchResult" });
    })
    .catch((err) => {
      dispatch(loadingError(err));
      // eslint-disable-next-line no-console
      console.log("Can’t access  response. Blocked by browser?");
    });
};

export default fetchSimPop;
