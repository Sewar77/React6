import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light", //light, dark
  );

  // function => reRender for all components when theme value changes!
  useEffect(() => {
    // apply the effect
    // document.body.className = theme; //
    document.getElementById("root").style.backgroundColor =
      theme === "light" ? "white" : "black";

    document.getElementById("root").style.color =
      theme === "dark" ? "white" : "black";
      
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
