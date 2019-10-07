
// le default state est rempli via les cookies
// grace a la lib "redux-cookies-middleware"
// voir le fichier "./pages/_app.jsx"
const DEFAULT_STATE = [];

const exportDocument = (state, action) => {
    //const nextState = state.map((obj, index) => {
    //  const shouldUpdateThisCasType = index === action.index;
    //  if (!shouldUpdateThisCasType) return obj;
    //  return action.data;
    //});
    //return nextState;
    alert(state);
  };

const options = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
    case "onOptionsMenuExportDocument":
        return exportDocument(state, action);
    default:
    return state;
  }
};

export default options;
