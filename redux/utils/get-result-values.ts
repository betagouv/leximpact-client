import { getIn } from "immutable";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../reducers";

export function getResultNumberValues(results: RootState["results"], path: string): {
  amendementValue: number | undefined,
  baseValue: number | undefined,
  plfValue: number | undefined,
} {
  const propertyNames = path.split(".");
  return {
    amendementValue: getIn(results.amendement, propertyNames, undefined),
    baseValue: getIn(results.base, propertyNames, undefined),
    plfValue: getIn(results.plf, propertyNames, undefined),
  };
}

export function getResultBoolValues(results: RootState["results"], path: string): {
  amendementValue: boolean | undefined,
  baseValue: boolean | undefined,
  plfValue: boolean | undefined,
} {
  const propertyNames = path.split(".");
  return {
    amendementValue: getIn(results.amendement, propertyNames, undefined),
    baseValue: getIn(results.base, propertyNames, undefined),
    plfValue: getIn(results.plf, propertyNames, undefined),
  };
}
