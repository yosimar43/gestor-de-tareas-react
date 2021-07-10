import { BrowserRouter as Router, Switch, Route } from "reacft-router-dom";
import AccountPage from "../views/AccountPage";
import Error404Page from "../views/Error404Page";
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import ProjectPage from "../views/ProjectPage";
import ProjectsPage from "../views/ProjectsPage";
import RegisterLogin from "../views/RegisterLogin";
import UsersPage from "../views/UsersPage";

const AppRouter = () => {
 return (
  <Router>
   <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={RegisterLogin} />
    <Route exact path="/account" component={AccountPage} />
    <Route exact path="/projects" component={ProjectsPage} />
    <Route exact path="/project/:projectId" component={ProjectPage} />
    <Route exact path="/admin/users" component={UsersPage} />
    <Route path="*" component={Error404Page} />
   </Switch>
  </Router>
 );
};

export default AppRouter;
