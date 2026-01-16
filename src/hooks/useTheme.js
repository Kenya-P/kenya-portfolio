import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage.js";

export default function useTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "system");

  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;

    const shouldBeDark =
      theme === "dark" || (theme === "system" && prefersDark);

    root.classList.toggle("dark", shouldBeDark);
  }, [theme]);

  return { theme, setTheme };
}
