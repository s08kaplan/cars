"use strict"
const router = require("../configs/requiredBasics").express.Router()

router.use("/auth", require("./auth"))

router.use("/users", require("./user"))

router.use("/cars", require("./car"))

router.use("/messages", require("./message"));

router.use('/visitors', require('./visitor'))

router.use("/uploads", require("./upload"))


module.exports = router