import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ hasRole, ...props }) => {
 console.log(hasRole);
 const { user } = useAuth();

 if (hasRole !== user.role) return <Redirect to="/projects" />;

 if (!user) return <Redirect to="/login" />;

 return <Route {...props} />;
};

export default PrivateRoute;
