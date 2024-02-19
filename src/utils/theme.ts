import { createContext, useContext } from "react";

export const themes = {
  light: {
    theme: "light",
    backgroundColor: "#FFFFFF",
    primaryColor: "#7DB928",
    primaryOpacityColor: "rgba(125, 185, 40, 0.8)",
    primaryOpacityColorTwo: "rgba(125, 185, 38, 0.50)",
    secundaryColor: "#A3A3A3",
    oppositeColor: "#fff",
    primaryTextColor: "#000",
    secundaryTextColor: "#666666",
    shadowColor: "#A3A3A3",
  },
  dark: {
    theme: "dark",
    backgroundColor: "#000",
    primaryColor: "#348D2F",
    primaryOpacityColor: "rgba(59, 170, 53, 0.7)",

    primaryOpacityColorTwo: "rgba(68, 192, 65, 0.25)",
    secundaryColor: "#A3A3A3",
    primaryTextColor: "#fff",
    oppositeColor: "#fff",
    secundaryTextColor: "#666666",
    shadowColor: "#348D2F",
  },
};

export const ThemeContext = createContext(themes.light);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
