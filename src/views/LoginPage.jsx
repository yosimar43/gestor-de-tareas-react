import { roles } from "../helpers/roles";
import { useAuth } from "../hooks/useAuth";

const userCredentials = {
 id: 1,
 role: roles.regular,
};

const LoginPage = () => {
 const { login } = useAuth();

 return (
  <div>
   <h1>Login Page</h1>
   <button onClick={() => login(userCredentials)}>Iniciar sesion</button>
  </div>
 );
};

export default LoginPage;
