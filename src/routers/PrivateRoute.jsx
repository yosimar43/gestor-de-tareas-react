import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = props => {
 const { user } = useAuth();

 if (!user) return <Redirect to="/login" />;

 return <Route {...props} />;
};

export default PrivateRoute;
