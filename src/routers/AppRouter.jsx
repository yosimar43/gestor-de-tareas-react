import {  Switch } from "react-router-dom";
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
import { routes } from "../helpers/routes";
import { roles } from "../helpers/roles";

const AppRouter = () => {
 return (
  <Layout>
  {/* COMPONENT NAVIGATION  */}
   <Switch>
    <PublicRoute exact path={routes.home} component={HomePage} />
    <PublicRoute exact path={routes.login} component={LoginPage} />
    <PublicRoute exact path={routes.register} component={RegisterLogin} />
    <PrivateRoute exact path={routes.account} component={AccountPage} />
    <PrivateRoute exact path={routes.projects} component={ProjectsPage} />
    <PrivateRoute exact path={routes.project()} component={ProjectPage} />
    <PrivateRoute
     hasRole={roles.admin}
     exact
     path={routes.admin.users}
     component={UsersPage}
    />
    <PrivateRoute path="*" component={Error404Page} />
   </Switch>
  </Layout>
 );
};

export default AppRouter;
