const Router = require("express");
const { addAdmin, loginAdmin } = require("../controllers/admin-controllers");

const router = Router();

router.post("/admin/add", addAdmin);
router.post("/admin", loginAdmin);

module.exports = router;
