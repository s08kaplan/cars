"use strict"

const budget = require("../controllers/budget")

const { express } = require("../configs/requiredBasics")
const router = express.Router()

const isAdmin = require("../middlewares/authorized")
 
router.route("/")
.get(budget.list)
.post(budget.create)

router.route("/:budgetId")
.get(budget.read)
.put(budget.update)
.patch(budget.update)
.delete(budget.delete)

module.exports = router