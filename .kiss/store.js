const DEFAULT_STATE = false

const myStore = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "onEventFromAnyAction":
      return action.valueFromAction
    default:
      return state
  }
}

export default myStore
