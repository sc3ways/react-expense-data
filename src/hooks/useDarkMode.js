import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    const themeExist = localStorage.getItem("theme");
    if (themeExist) return themeExist;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;

    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    const rootEl = document.documentElement;

    rootEl.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeMode = () => {
    console.log("click Theme");
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    // setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return [theme, handleThemeMode];
}
