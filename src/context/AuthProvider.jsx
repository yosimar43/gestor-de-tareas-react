import { useState } from "react";
import { createContext } from "react";
import { roles } from "../helpers/roles";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
 const [user, setUser] = useState({ id: 1, role: roles.regular });

 const contextData = {
  user,
 };

 return (
  <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
 );
};

export default AuthProvider;
