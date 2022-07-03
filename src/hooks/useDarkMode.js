import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [themeMode, setThemeMode] = useState(true);
  const toggleTheme = () => {
    window.localStorage.setItem("theme", JSON.stringify(!themeMode));
    setThemeMode(!themeMode);
  };

  useEffect(() => {
    const getTheme = window.localStorage.getItem("theme");
    getTheme && setThemeMode(JSON.parse(getTheme));
  }, []);

  return [themeMode, toggleTheme];
};
