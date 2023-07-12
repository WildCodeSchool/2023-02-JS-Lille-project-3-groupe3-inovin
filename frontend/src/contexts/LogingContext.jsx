// import { createContext, useState, useMemo, useContext } from "react";
// import propTypes from "prop-types";
// import UserContext from "./UserContext";
// export const LogingContext = createContext();

// export function LogingProvider({ children }) {

//   // const { user } = useContext(UserContext);
//   // if (user) {
//   //   console.log("he is in")
//   // }
//   // const loging = () => {
//   //   setIsOnline(true);
//   // };

//   // const logout = () => {
//   //   setIsOnline(false);
//   // };

//   // const logingContextValue = useMemo(
//   //   () => ({ isOnline, loging, logout }),
//   //   [isOnline, loging, logout]
// //  );

//   return (
//     <LogingContext.Provider value={""}>
//       {children}
//     </LogingContext.Provider>
//   );
// }

// LogingProvider.propTypes = {
//   children: propTypes.shape({
//     isOnline: propTypes.string,
//     loging: propTypes.string,
//     logout: propTypes.string,
//   }).isRequired,
// };
