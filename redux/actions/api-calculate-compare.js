import { get } from "lodash";

import request from "../../components/utils/request";
import { transformCasTypesToData } from "../../components/utils/transform-cas-types-to-data";
import { loadingComplete, loadingError, loadingStart } from "./loading";

const fetchCalculateCompare = () => async (dispatch, getState) => {
  dispatch(loadingStart());

  const { casTypes, reforme } = getState();
  const descriptionCasTypes = transformCasTypesToData(casTypes);
  const body = {
    description_cas_types: descriptionCasTypes,
    reforme: {
      ...reforme,
      impot_revenu: {
        ...reforme.impot_revenu,
        bareme: {
          ...reforme.impot_revenu.bareme,
          taux: reforme.impot_revenu.bareme.taux.map(taux => taux / 100),
        },
        decote: {
          ...reforme.impot_revenu.decote,
          taux: reforme.impot_revenu.decote.taux / 100,
        },
      },
    },
  };

  try {
    const payload = await request.post("/calculate/compare", body);
    dispatch(loadingComplete());
    dispatch({ data: payload.res_brut, type: "onCalculateCompareLoaded" });
  } catch (err) {
    dispatch(loadingError(err));
    // eslint-disable-next-line no-console
    console.log("Can’t access  response. Blocked by browser?");
  }
};

export default fetchCalculateCompare;
