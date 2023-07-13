import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

// Création du contexte de thème
const ThemeContext = createContext(" ");

// Provider du contexte de thème
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark"); // Thème par défaut est sombre

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const themeContextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext, ThemeProvider };
