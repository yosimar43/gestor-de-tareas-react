import { useLocation } from "react-router-dom";
import { roles } from "../helpers/roles";
import { useAuth } from "../hooks/useAuth";

const userCredentials = {
 id: 1,
 name: "daniel",
 email: "yosimar43@gmail.com",
 role: roles.regular,
};

const LoginPage = () => {
 const location = useLocation();
 console.log(location);

 const { login } = useAuth();

 return (
  <div>
   <h1>Login Page</h1>
   <button onClick={() => login(userCredentials, location.state?.from)}>
    Iniciar sesion
   </button>
  </div>
 );
};

export default LoginPage;
