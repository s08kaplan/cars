"use strict"
const user = require("../controllers/user")

const { express } = require("../configs/requiredBasics")
const router = express.Router()
 const authorized = require("../middlewares/authorized")

router.use(authorized)
router.route("/")
.get(user.list)
.post(user.create)

router.route("/:userId")
.get(user.read)
.put(user.update)
.patch(user.update)
.delete(user.delete)

module.exports = router