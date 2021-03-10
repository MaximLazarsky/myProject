import MainPage from "../pages/MainPage";
import ClientsPage from "../pages/ClientsPage";
import EmployeesPage from "../pages/EmployeesPage";
import ProjectsPage from "../pages/ProjectsPage";
import MessagesPage from "../pages/MessagesPage";
import StatsPage from "../pages/StatsPage";

export const adminRoutes = [
  {
    path: "/admin/main",
    component: MainPage,
    text: "main",
  },
  {
    path: "/admin/employees",
    component: EmployeesPage,
    text: "employees",
  },
  {
    path: "/admin/clients",
    component: ClientsPage,
    text: "clients",
  },
  {
    path: "/admin/projects",
    component: ProjectsPage,
    text: "projects",
  },
  {
    path: "/admin/messages",
    component: MessagesPage,
    text: "messages",
  },
  {
    path: "/admin/stats",
    component: StatsPage,
    text: "stats",
  },
];
