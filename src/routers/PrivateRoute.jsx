import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { routes } from "../helpers/routes";

const PrivateRoute = ({ hasRole: role, ...props }) => {
 const location = useLocation();
 const { hasRole, isLogged } = useAuth();

 if (role && !hasRole(role)) return <Redirect to={routes.projects} />;

 if (!isLogged())
  return <Redirect to={{ pathname: routes.login, state: {from: location } }} />;

 return <Route {...props} />;
};

export default PrivateRoute;
