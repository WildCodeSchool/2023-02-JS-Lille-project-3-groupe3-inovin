import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [firstname, setFirstname] = useState(null);
  const contextValue = useMemo(
    () => ({ user, setUser, firstname, setFirstname }),
    [user, setUser, firstname, setFirstname]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;
