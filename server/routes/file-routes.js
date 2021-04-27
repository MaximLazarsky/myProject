const Router = require('express')
const router = new Router()
const { passport, useAdminMiddleWare } = require("../middleware")
const {
	addFile,
	addMultipleFiles,
  } = require("../controllers/file-controller");

router.post("/file", useAdminMiddleWare(), addFile);
router.post("/file/files", useAdminMiddleWare(), addMultipleFiles);

module.exports = router