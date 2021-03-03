const Router = require("express");
const { passport, useAdminMiddleWare } = require("../middleware");
const {
  addProject,
  updateProject,
  getProjectsAdmin,
  getProjects,
  deleteProject,
} = require("../controllers/projects-controllers");

const router = Router();

router.post("/projects", useAdminMiddleWare(), addProject);
router.put("/projects/:id", useAdminMiddleWare(), updateProject);
router.get("/projects/admin", useAdminMiddleWare(), getProjectsAdmin);
router.get("/projects", getProjects);
router.delete("/projects/:id", useAdminMiddleWare(), deleteProject);

module.exports = router;
