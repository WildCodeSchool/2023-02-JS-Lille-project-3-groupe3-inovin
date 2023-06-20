import { createContext, useState, useMemo } from "react";
import propTypes from "prop-types";

export const LogingContext = createContext();

export function LogingProvider({ children }) {
  const [isOnline, setIsOnline] = useState(false);

  const loging = () => {
    setIsOnline(true);
  };

  const logout = () => {
    setIsOnline(false);
  };

  const logingContextValue = useMemo(
    () => ({ isOnline, loging, logout }),
    [isOnline, loging, logout]
  );

  return (
    <LogingContext.Provider value={logingContextValue}>
      {children}
    </LogingContext.Provider>
  );
}

LogingProvider.propTypes = {
  children: propTypes.shape({
    isOnline: propTypes.string,
    loging: propTypes.string,
    logout: propTypes.string,
  }).isRequired,
};
