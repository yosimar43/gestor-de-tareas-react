import { useState } from "react";
import { createContext } from "react";
import { useHistory } from "react-router-dom";
import { roles } from "../helpers/roles";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
 const history = useHistory();
 const [user, setUser] = useState({ id: 1, role: roles.regular });

 const login = (userCredentials, fromLocations) => {
  setUser(userCredentials);
  history.push(fromLocations);
 };
 const logout = () => setUser(null);

 const isLogged = () => !!user;
 const hasRole = role => user?.role === role;

 const contextData = {
  user,
  isLogged,
  hasRole,
  login,
  logout,
 };

 return (
  <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
 );
};

export default AuthProvider;
