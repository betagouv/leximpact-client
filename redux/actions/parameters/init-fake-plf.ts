export interface InitFakePlfAction {
  type: "INIT_FAKE_PLF",
}

export function initFakePlf(): InitFakePlfAction {
  return {
    type: "INIT_FAKE_PLF",
  };
}
