import fetch from "isomorphic-fetch";

import { loadingComplete, loadingStart } from "./loading";

/*
  const endpoint = this.endpoint();
  const { reforme } = this.state;
  fetch(`${endpoint}/calculate/compare`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      deciles: true,
      reforme,
    }),
  })
    .then(response => response.json())
    .then((json) => {
      this.setState({ total_pop: json });
    });
*/
const fetchSimPop = () => (dispatch, getState, { apiEndpoint }) => {
  dispatch(loadingStart());
  const { reforme, token } = getState();
  const body = JSON.stringify({ deciles: true, reforme , token});
  console.log("token",body);
  const promise = fetch(`${apiEndpoint}/calculate/simpop`, {
    body,
    headers: { "Content-Type": "application/json" },
    method: "POST",
  })
    .then(response => response.json())
    .then((payload) => {
      dispatch(loadingComplete());
      dispatch({ data: payload, type: "onSimPopFetchResult" });
    })
    .catch(() => {
      dispatch(loadingComplete());
      // eslint-disable-next-line no-console
      console.log("Can’t access  response. Blocked by browser?");
    });
  return promise;
};

export default fetchSimPop;
