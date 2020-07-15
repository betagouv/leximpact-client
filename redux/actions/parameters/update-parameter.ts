export interface UpdateParameterAction {
  type: "UPDATE_PARAMETER";
  path: string;
  value: any;
}

export function updateParameter(path: string, value: any): UpdateParameterAction {
  return {
    path,
    type: "UPDATE_PARAMETER",
    value,
  };
}
