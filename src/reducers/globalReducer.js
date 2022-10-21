export const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_IS_MOBILE":
      return {
        global: {
          isMobile: action.payload,
        },
      };
    default:
      return state;
  }
};
