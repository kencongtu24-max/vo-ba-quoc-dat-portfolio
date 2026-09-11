import { useCallback, useState } from "react";

const STORAGE_KEY = "theme";

function getInitialTheme() {
  // index.html already set data-theme on <html> before React mounts
  // (avoids a flash of the wrong theme) — just read it back.
  const current = document.documentElement.getAttribute("data-theme");
  return current === "light" || current === "dark" ? current : "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* private mode / storage disabled — theme just won't persist */
      }
      return next;
    });
  }, []);

  return [theme, toggle];
}
