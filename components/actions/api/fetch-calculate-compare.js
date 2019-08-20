/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  react/jsx-indent: [2, 2,{indentLogicalExpressions: false}],
  react/jsx-indent-props: [2, 2],
  import/order: [2, {
    newlines-between: "always",
    groups: ["builtin", "external", "parent", "sibling", "index"]
  }]
*/
import { get } from "lodash";
import fetch from "isomorphic-fetch";

import { loadingStart, loadingComplete } from "../loading";

const fetchCalculateCompare = () => (dispatch, getState, { apiEndpoint }) => {
  dispatch(loadingStart());
  const { casTypes, reforme } = getState();
  const body = JSON.stringify({
    reforme,
    description_cas_types: casTypes,
  });
  const promise = fetch(`${apiEndpoint}/calculate/compare`, {
    body,
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then(response => response.json())
    .then((payload) => {
      const data = get(payload, "res_brut");
      dispatch(loadingComplete());
      dispatch({ type: "onCalculateCompareLoaded", data });
    })
    .catch(() => {
      dispatch(loadingComplete());
      // eslint-disable-next-line no-console
      console.log("Can’t access  response. Blocked by browser?");
    });
  return promise;
};

export default fetchCalculateCompare;
