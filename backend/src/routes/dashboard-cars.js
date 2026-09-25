"use strict"

const { express } = require("../configs/requiredBasics")
const router = express.Router()
const dashboardCars = require("../controllers/dashboard-cars")
const uploadMiddleware = require("../middlewares/upload")
const isAdmin = require("../middlewares/authorized")

 router.route("/")
 .get(dashboardCars.list)
 .post(isAdmin, uploadMiddleware.multiple, dashboardCars.create)

 router.route("/:dashboardCarId")
 .get(dashboardCars.read)
 .put(isAdmin, dashboardCars.update)
 .patch(isAdmin, dashboardCars.update)
 .delete(isAdmin, dashboardCars.delete)

 module.exports = router