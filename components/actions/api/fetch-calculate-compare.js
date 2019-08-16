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
import fetch from "isomorphic-fetch";

import { loadingStart, loadingComplete } from "../loading";

const calculateCompareLoaded = payload => ({
  type: "onCalculateCompareLoaded",
  payload,
});

const fetchCalculateCompare = requestBody => (
  dispatch,
  getState,
  { apiEndpoint },
) => {
  const { casTypes } = getState();
  dispatch(loadingStart());
  const body = { ...requestBody, description_cas_types: casTypes };
  const promise = fetch(`${apiEndpoint}/calculate/compare`, {
    body: JSON.stringify(body),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then(response => response.json())
    .then((json) => {
      console.log("json", json);
      dispatch(loadingComplete());
      // this.setState({ res_brut: json.res_brut, loading: false });
    })
    .catch(() => {
      dispatch(loadingComplete());
      // eslint-disable-next-line no-console
      console.log("Can’t access  response. Blocked by browser?");
    });
  return promise;
};

export default fetchCalculateCompare;
