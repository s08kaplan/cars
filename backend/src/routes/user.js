"use strict"
const user = require("../controllers/user")
const upload = require("../middlewares/upload")
const { express } = require("../configs/requiredBasics")
const router = express.Router()
const authorized = require("../middlewares/authorized")
const authenticatedUser = require("../middlewares/authentication")

router.route("/")
.get(user.list)
.post(upload.single, user.create)

router.route("/:userId")
.get(authenticatedUser,user.read)
.put(authenticatedUser, upload.single, user.update)
.patch(authenticatedUser, upload.single, user.update)
.delete(authenticatedUser,user.delete)

module.exports = router