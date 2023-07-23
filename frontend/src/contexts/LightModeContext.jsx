import React, { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

const LightModeContext = createContext();

function LightModeProvider({ children }) {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("lightMode");
    if (storedMode !== null) {
      setLightMode(storedMode === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lightMode", lightMode.toString());
  }, [lightMode]);

  const toggleLightMode = () => {
    setLightMode((prevLightMode) => !prevLightMode);
  };
  const contextValue = useMemo(
    () => ({
      lightMode,
      toggleLightMode,
    }),
    [lightMode, toggleLightMode]
  );

  return (
    <LightModeContext.Provider value={contextValue}>
      {children}
    </LightModeContext.Provider>
  );
}

LightModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LightModeContext, LightModeProvider };
