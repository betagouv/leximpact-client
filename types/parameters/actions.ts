export interface UpdateParameterAction {
  type: "UPDATE_PARAMETER";
  path: string;
  value: any;
}

export type ParameterAction = UpdateParameterAction;
