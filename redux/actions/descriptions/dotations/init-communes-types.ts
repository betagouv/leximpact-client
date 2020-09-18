export interface InitCommunesTypesAction {
  type: "INIT_COMMUNES_TYPES";
}

export function initCommunesTypes(): InitCommunesTypesAction {
  return {
    type: "INIT_COMMUNES_TYPES",
  };
}
