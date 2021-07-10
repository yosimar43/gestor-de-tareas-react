import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { routes } from "../helpers/routes";

const PrivateRoute = ({ hasRole: role, ...props }) => {
 const { hasRole, isLogged } = useAuth();

 if (role && !hasRole(role)) return <Redirect to={routes.projects} />;
 console.log(isLogged());

 if (!isLogged()) return <Redirect to={routes.login} />;

 return <Route {...props} />;
};

export default PrivateRoute;
