"use strict"
const user = require("../controllers/user")

const { express } = require("../configs/requiredBasics")
const router = express.Router()
const authorized = require("../middlewares/authorized")
const authenticatedUser = require("../middlewares/authentication")

router.route("/")
.get(authorized,user.list)
.post(user.create)

router.route("/:userId")
.get(authenticatedUser,user.read)
.put(authenticatedUser,user.update)
.patch(authenticatedUser,user.update)
.delete(authenticatedUser,user.delete)

module.exports = router