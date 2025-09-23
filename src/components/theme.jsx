import { useEffect, useState } from "react";
import LogoD from "../assets/dlogo.webp";
import LogoW from "../assets/wlogo.webp";

const theme = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button title="Mode Switch"
    className="cursor-pointer"
      onClick={() => setDarkMode((prev) => !prev)}
    >
      <img
        src={darkMode ? LogoW : LogoD}
        alt="Theme Toggle"
        className="h-[52px]"
      />
    </button>
  );
};

export default theme;
