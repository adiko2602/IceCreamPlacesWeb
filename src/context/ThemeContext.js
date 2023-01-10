import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [darkMode, setDarkMode] = useState("light");

  const getIsMobile = () => {
    return isMobile;
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode, setDarkMode, setIsMobile, getIsMobile }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
