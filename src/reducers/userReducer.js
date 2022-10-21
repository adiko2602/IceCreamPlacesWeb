export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_TYPE":
      return {
        user: {
          type: action.payload,
        },
      };
    default:
      return state;
  }
};
