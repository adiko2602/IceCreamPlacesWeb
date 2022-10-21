import { createContext, useReducer } from "react";
import { globalReducer } from "../reducers/globalReducer";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    global: {
      isMobile: "true",
    },
  });

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
