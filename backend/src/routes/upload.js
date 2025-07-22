"use strict"

const router = require("../configs/requiredBasics").express.Router()
const upload = require("../controllers/upload")
const uploadMiddleware = require("../middlewares/upload")
const isAdmin = require("../middlewares/authorized")

 router.route("/")
 .get(upload.list)
 .post(isAdmin, uploadMiddleware.multiple, upload.create)

 router.route("/:uploadId")
 .get(upload.read)
 .put(isAdmin, upload.update)
 .patch(isAdmin, upload.update)
 .delete(isAdmin, upload.delete)

 module.exports = router