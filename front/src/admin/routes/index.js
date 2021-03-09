import Main from "../pages/Main";
import Clients from "../pages/Clients";
import Employees from "../pages/Employees";
import Projects from "../pages/Projects";
import Messages from "../pages/Messages";
import Stats from "../pages/Stats";

export const adminRoutes = [
  {
    path: "/admin/main",
    component: Main,
    text: "main",
  },
  {
    path: "/admin/employees",
    component: Employees,
    text: "employees",
  },
  {
    path: "/admin/clients",
    component: Clients,
    text: "clients",
  },
  {
    path: "/admin/projects",
    component: Projects,
    text: "projects",
  },
  {
    path: "/admin/messages",
    component: Messages,
    text: "messages",
  },
  {
    path: "/admin/stats",
    component: Stats,
    text: "stats",
  },
];
