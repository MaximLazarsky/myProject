const Router = require("express");
const {
  addNewEmployee,
  getEmployees,
  deleteEmployee,
  updateEmployee,
} = require("../controllers/employees-controller");

const router = new Router();

router.post("/employees", addNewEmployee);
router.get("/employees", getEmployees);
router.delete("/employees/:id", deleteEmployee);
router.put("/employees/:id", updateEmployee);

module.exports = router;
