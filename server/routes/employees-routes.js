const Router = require("express");
const { passport, useAdminMiddleWare } = require("../middleware");
const {
  addNewEmployee,
  getEmployees,
  deleteEmployee,
  updateEmployee,
} = require("../controllers/employees-controller");

const router = new Router();

router.post("/employees", useAdminMiddleWare(), addNewEmployee);
router.get("/employees", getEmployees);
router.delete("/employees/:id", useAdminMiddleWare(), deleteEmployee);
router.put("/employees/:id", useAdminMiddleWare(), updateEmployee);

module.exports = router;
