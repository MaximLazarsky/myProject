const Router = require("express");
const { passport, userAdminMiddleWare } = require("../middleware");
const {
  addNewEmployee,
  getEmployees,
  deleteEmployee,
  updateEmployee,
} = require("../controllers/employees-controller");

const router = new Router();

router.post("/employees", userAdminMiddleWare(), addNewEmployee);
router.get("/employees", getEmployees);
router.delete("/employees/:id", userAdminMiddleWare(), deleteEmployee);
router.put("/employees/:id", userAdminMiddleWare(), updateEmployee);

module.exports = router;
