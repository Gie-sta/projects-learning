const initialState = 'home'

export const backgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEFINE_BODY_BACKGROUND":
      return { ...state, background: action.payload };

    default:
      return state
  }
}
