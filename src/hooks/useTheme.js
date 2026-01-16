import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage.js";

export default function useTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "system");

  useEffect(() => {
    const root = document.documentElement;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const apply = () => {
      const prefersDark = media.matches;
      const shouldBeDark =
        theme === "dark" || (theme === "system" && prefersDark);

      root.classList.toggle("dark", shouldBeDark);
    };

    apply();

    // If user selects "system", respond to OS theme changes live
    const onChange = () => {
      if (theme === "system") apply();
    };

    // Safari/old browsers compatibility
    if (media.addEventListener) media.addEventListener("change", onChange);
    else media.addListener(onChange);

    return () => {
      if (media.removeEventListener) media.removeEventListener("change", onChange);
      else media.removeListener(onChange);
    };
  }, [theme]);

  return { theme, setTheme };
}
