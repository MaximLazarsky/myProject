const Router = require("express");
const { passport, useAdminMiddleWare } = require("../middleware");
const {
  addClientAdmin,
  getClients,
  deleteClient,
  updateClient,
  addClient,
} = require("../controllers/clients-controller");
const { body } = require("express-validator");

const router = new Router();

router.post("/clients", body("clientEmail").isEmail(), addClient);
router.post(
  "/clients/admin",
  body("clientEmail").isEmail(),
  useAdminMiddleWare(),
  addClientAdmin
);
router.get("/clients", useAdminMiddleWare(), getClients);
router.delete("/clients/:id", useAdminMiddleWare(), deleteClient);
router.put(
  "/clients/:id",
  body("clientEmail").isEmail(),
  useAdminMiddleWare(),
  updateClient
);

module.exports = router;
