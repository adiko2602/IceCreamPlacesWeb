export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_TYPE":
      return {
        user: {
          ...state.user,
          type: action.payload,
        },
      };
    case "SET_USER_LOGIN":
      return {
        user: {
          ...state.user,
          login: action.payload,
        },
      };
    default:
      return state;
  }
};
