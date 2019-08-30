import { get } from "lodash";

import request from "../../components/utils/request";
import { transformCasTypesToData } from "../../components/utils/transform-cas-types-to-data";
import { loadingComplete, loadingError, loadingStart } from "./loading";

const fetchCalculateCompare = () => (dispatch, getState) => {
  dispatch(loadingStart());
  const timestamp = Date.now().toString();
  const { casTypes, reforme } = getState();
  const descriptionCasTypes = transformCasTypesToData(casTypes);
  const body = {
    description_cas_types: descriptionCasTypes,
    reforme,
    timestamp,
  };
  return request
    .post("/calculate/compare", body)
    .then((payload) => {
      const data = get(payload, "res_brut");
      dispatch(loadingComplete());
      dispatch({ data, type: "onCalculateCompareLoaded" });
    })
    .catch((err) => {
      dispatch(loadingError(err));
      // eslint-disable-next-line no-console
      console.log("Can’t access  response. Blocked by browser?");
    });
};

export default fetchCalculateCompare;
