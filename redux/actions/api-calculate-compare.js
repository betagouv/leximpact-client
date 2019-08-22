import fetch from "isomorphic-fetch";
import { get } from "lodash";

import { loadingComplete, loadingStart } from "./loading";

const fetchCalculateCompare = () => (dispatch, getState, { apiEndpoint }) => {
  dispatch(loadingStart());
  const { casTypes, reforme } = getState();
  const body = JSON.stringify({
    description_cas_types: casTypes,
    reforme,
  });
  const promise = fetch(`${apiEndpoint}/calculate/compare`, {
    body,
    headers: { "Content-Type": "application/json" },
    method: "POST",
  })
    .then(response => response.json())
    .then((payload) => {
      const data = get(payload, "res_brut");
      dispatch(loadingComplete());
      dispatch({ data, type: "onCalculateCompareLoaded" });
    })
    .catch(() => {
      dispatch(loadingComplete());
      // eslint-disable-next-line no-console
      console.log("Can’t access  response. Blocked by browser?");
    });
  return promise;
};

export default fetchCalculateCompare;
