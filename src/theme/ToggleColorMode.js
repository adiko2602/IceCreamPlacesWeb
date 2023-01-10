import { useEffect, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTheme } from "../context/ThemeContext";
import "./theme.css";
import { useMediaQuery } from "@mui/material";

export default function ToggleColorMode({ children }) {
  const prefersColorScheme = useMediaQuery("(prefers-color-scheme: dark)");
  console.log(prefersColorScheme);
  const themeContext = useTheme();

  useEffect(() => {
    if (themeContext.darkMode === "dark") {
      document.body.classList.add("dark-theme");
      return;
    }
    document.body.classList.remove("dark-theme");
  }, [themeContext.darkMode]);

  useEffect(() => {
    const setPref = localStorage.getItem("darkMode");
    if (!setPref) {
      const pref = prefersColorScheme ? "dark" : "light";
      themeContext.setDarkMode(pref);
      localStorage.setItem("darkMode", pref);
      return;
    }
    if (setPref === "dark" || setPref === "light") {
      themeContext.setDarkMode(setPref);
      return;
    }
    themeContext.setDarkMode("light");
  }, []);

  const themeDark = {
    palette: {
      type: "dark",
      action: {
        disabledBackground: "#2f2f2f",
        disabled: "#acacac",
      },
      primary: {
        main: "#747474",
        contrastText: "rgba(255,255,255,0.87)",
      },
      secondary: {
        main: "#272626",
        dark: "#818181",
        contrastText: "rgba(255,255,255,0.87)",
      },
      background: {
        default: "#222223",
        paper: "#272626",
      },
      text: {
        primary: "#dedee7",
        secondary: "#fefefeee",
        disabled: "#ffffff80",
        hint: "#ffffff80",
      },
    },
    typography: {
      htmlFontSize: 20,
      fontFamily: "Montserrat",
    },
  };

  const themeLight = {
    palette: {
      mode: "light",
      type: "light",
      primary: {
        main: "#272727",
      },
      secondary: {
        main: "#717171",
      },
      background: {
        default: "#f5f5f7",
      },
      text: {
        primary: "rgba(29,29,31,0.85)",
        secondary: "rgba(162, 162, 170, 0.85)",
        disabled: "rgba(29,29,31,0.5)",
        hint: "rgba(107,107,111,0.5)",
      },
    },
    typography: {
      htmlFontSize: 20,
      fontFamily: "Montserrat",
    },
  };

  const theme = useMemo(
    () =>
      createTheme(themeContext.darkMode === "light" ? themeLight : themeDark),
    [themeContext]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
