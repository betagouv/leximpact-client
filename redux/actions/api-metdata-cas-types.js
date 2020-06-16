import request from "../../components/utils/request";
// import { loadingComplete, loadingError, loadingStart } from "./loading";

const fetchMetadataCasTypes = () => (dispatch, getState) => {
  const { token } = getState();
  // dispatch(loadingStart());
  return request
    .post("/metadata/description_cas_types")
    .then((payload) => {
      // dispatch(loadingComplete());
      dispatch({ payload, token, type: "onInitializeCasTypes" });
    })
    .catch((err) => { // eslint-disable-line no-unused-vars
      // dispatch(loadingError(err));
      // eslint-disable-next-line no-console
      console.log("Can’t access  response. Blocked by browser?");
    });
};

export default fetchMetadataCasTypes;
