import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ hasRole: role, ...rest }) => {
 const { user } = useAuth();

 if (role && user?.role !== role) return <Redirect to="/" />;

 if (!user) return <Redirect to="/login" />;

 return <Route {...rest} />;
};

export default PrivateRoute;
