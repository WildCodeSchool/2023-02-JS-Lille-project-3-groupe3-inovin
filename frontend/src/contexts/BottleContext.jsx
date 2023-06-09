import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const BottleContext = createContext(null);

export function BottleProvider({ children }) {
  const [wineBottleId, setWineBottleId] = useState([]);
  const [wineBottleName, setWineBottleName] = useState([]);
  const contextValue = useMemo(
    () => ({
      wineBottleId,
      setWineBottleId,
      wineBottleName,
      setWineBottleName,
    }),
    [wineBottleId, setWineBottleId, wineBottleName, setWineBottleName]
  );

  return (
    <BottleContext.Provider value={contextValue}>
      {children}
    </BottleContext.Provider>
  );
}

BottleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BottleContext;
