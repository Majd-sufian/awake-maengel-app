export const initialState = {
  busNumber: null,
  systemOption: [],
  busSystem: [],
  systemPosition: [],
  busLocation: [],
  caseFotos: [],
  caseDescription: [],
  selectedSystem: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_Bus_Num":
      return {
        ...state,
        busNumber: action.number,
      };
      break;
    case "ADD_Bus_System":
      return {
        ...state,
        busSystem: action.system,
        selectedSystem: action.selectedSystem,
      };
      break;
    case "ADD_Bus_Position":
      return {
        ...state,
        systemPosition: action.position,
      };
      break;
    case "ADD_Bus_Option":
      return {
        ...state,
        systemOption: action.option,
      };
      break;
    case "Add_More_Info":
      return {
        ...state,
        busLocation: action.location,
        caseFotos: action.caseFotos,
        caseDescription: action.caseDescription,
      };
      break;
    default:
      return state;
  }
}

export default reducer;
