export const routes = {
 home: "/",
 login: "/login",
 register: "/register",
 account: "/account",
 projects: "/projects",
 project: projectID =>
  projectID ? `/projects/:${projectID}` : "/projects/:projectID",
 admin: {
  users: "/admin/users",
 },
};
