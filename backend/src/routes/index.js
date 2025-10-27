"use strict"
const { express } = require("../configs/requiredBasics")
const router = express.Router()

router.use("/auth", require("./auth"))

router.use("/users", require("./user"))

router.use("/cars", require("./car"))

router.use("/messages", require("./message"));

router.use('/visitors', require('./visitor'))

router.use("/budgets", require("./budget"))

router.use("/uploads", require("./upload"))


module.exports = router