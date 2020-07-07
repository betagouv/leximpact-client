/* eslint-disable camelcase */
import { DotationsState } from "./dotations-state";
import { IRState } from "./ir-state";

export interface ParametersState {
  dotations: DotationsState;
  impot_revenu: IRState;
}

export type { DotationsState, IRState };
