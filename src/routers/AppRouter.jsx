import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AccountPage from "../views/AccountPage";
import Error404Page from "../views/Error404Page";
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import ProjectPage from "../views/ProjectPage";
import ProjectsPage from "../views/ProjectsPage";
import RegisterLogin from "../views/RegisterLogin";
import UsersPage from "../views/UsersPage";
import { roles } from "../helpers/roles";

const AppRouter = () => {
 return (
  <Router>
   <Layout>
    <Switch>
     <PublicRoute exact path="/" component={HomePage} />
     <PublicRoute exact path="/login" component={LoginPage} />
     <PublicRoute exact path="/register" component={RegisterLogin} />
     <PrivateRoute exact path="/account" component={AccountPage} />
     <PrivateRoute exact path="/projects" component={ProjectsPage} />
     <PrivateRoute exact path="/project/:projectId" component={ProjectPage} />
     <PrivateRoute
      exact
      path="/admin/users"
      component={UsersPage}
      hasRole={{ role: roles.admin }}
     />
     <PrivateRoute path="*" component={Error404Page} />
    </Switch>
   </Layout>
  </Router>
 );
};

export default AppRouter;
