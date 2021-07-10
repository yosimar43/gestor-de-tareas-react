import { useState } from "react";
import { createContext } from "react";
import { roles } from "../helpers/roles";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
 const [user, setUser] = useState({ id: 1, role: roles.regular });

 const isLogged = () => !!user;
 const hasRole = role => user?.role === role;

 const contextData = {
  user,
  isLogged,
  hasRole,
 };

 return (
  <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
 );
};

export default AuthProvider;
