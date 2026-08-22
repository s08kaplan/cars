"use strict"
const { express } = require("../configs/requiredBasics")
const router = express.Router()

router.use("/api/auth", require("./auth"))

router.use("/api/users", require("./user"))

router.use("/api/cars", require("./car"))

router.use("/api/messages", require("./message"));

router.use('/api/visitors', require('./visitor'))

router.use("/api/budgets", require("./budget"))

router.use("/api/uploads", require("./upload"))


module.exports = router