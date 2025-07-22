"use strict"

const car = require("../controllers/car")

const router = require("../configs/requiredBasics").express.Router()

const isAdmin = require("../middlewares/authorized")
 
router.route("/")
.get(car.list)
.post(isAdmin, car.create)

router.route("/:carId")
.get(car.read)
.put(isAdmin, car.update)
.patch(isAdmin, car.update)
.delete(isAdmin, car.delete)

module.exports = router