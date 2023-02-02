import { useContext } from "react";
import { LS_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface useThemeResult {
  switchTheme: () => void;
  theme: Theme;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const switchTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LS_THEME_KEY, newTheme);
  };

  return { theme, switchTheme };
}
