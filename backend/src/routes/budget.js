"use strict"

const budget = require("../controllers/budget")

const router = require("../configs/requiredBasics").express.Router()

const isAdmin = require("../middlewares/authorized")
 
router.use(isAdmin)
router.route("/")
.get(budget.list)
.post(budget.create)

router.route("/:budgetId")
.get(budget.read)
.put(budget.update)
.patch(budget.update)
.delete(budget.delete)

module.exports = router