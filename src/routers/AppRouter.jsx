import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
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
   <Layout>
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
   </Layout>
  </Router>
 );
};

export default AppRouter;
