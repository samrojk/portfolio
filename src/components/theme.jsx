import { useEffect, useState } from "react";
import LogoD from "../assets/dlogo.png";
import LogoW from "../assets/wlogo.png";

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
    <button
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
