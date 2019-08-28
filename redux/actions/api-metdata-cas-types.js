import fetch from "isomorphic-fetch";

import { loadingComplete, loadingStart } from "./loading";

const fetchMetadataCasTypes = body => (dispatch, getState, { apiEndpoint }) => {
  const { token } = getState();
  dispatch(loadingStart());
  const promise = fetch(`${apiEndpoint}/metadata/description_cas_types`, {
    body,
    headers: { "Content-Type": "application/json" },
    method: "POST",
  })
    .then(response => response.json())
    .then((payload) => {
      dispatch(loadingComplete());
      dispatch({ payload, token, type: "onCasTypesLoaded" });
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.log("Can’t access  response. Blocked by browser?");
    });
  return promise;
};

export default fetchMetadataCasTypes;
