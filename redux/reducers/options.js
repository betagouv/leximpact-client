
// le default state est rempli via les cookies
// grace a la lib "redux-cookies-middleware"
// voir le fichier "./pages/_app.jsx"
const DEFAULT_STATE = [];

const exportDocument = (state, action) => {
    alert("And, the state value is:", state);
    const nextState = state.map((obj, index) => {
        const shouldExportDocument = index === action.index;
        if (!shouldExportDocument) return obj;
        return action.data;
    });
    return nextState;
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
