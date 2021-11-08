export const meteoReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_METEO":
      return { ...state, weather: action.payload }
    default:
      return state;
  };
}
