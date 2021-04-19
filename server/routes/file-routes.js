const Router = require('express')
const router = new Router()
const { passport, useAdminMiddleWare } = require("../middleware")
const {
	addFile,
  } = require("../controllers/file-controller");


router.post("/file", useAdminMiddleWare(), addFile);
// router.get("/get", getFile);

module.exports = router