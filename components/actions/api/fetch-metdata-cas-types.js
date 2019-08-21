import fetch from "isomorphic-fetch";

import { loadingStart, loadingComplete } from "../loading";

const fetchMetadataCasTypes = body => (dispatch, getState, { apiEndpoint }) => {
  dispatch(loadingStart());
  const promise = fetch(`${apiEndpoint}/metadata/description_cas_types`, {
    body,
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then(response => response.json())
    .then((payload) => {
      dispatch(loadingComplete());
      dispatch({ type: "onCasTypesLoaded", payload });
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.log("Can’t access  response. Blocked by browser?");
    });
  return promise;
};

export default fetchMetadataCasTypes;
