"use strict";

const router = require("../configs/requiredBasics").express.Router()

const visitor = require("../controllers/visitor");
const isAdmin = require("../middlewares/authorized")
router.use(isAdmin)
router.route("/").get(visitor.list).post(visitor.create);
router.route("/count").get(visitor.count);

router
  .route("/:id")
  .get(visitor.read)
  .put(visitor.update)
  .patch(visitor.update)
  .delete(visitor.delete);

/* ------------------------------------------------------- */
module.exports = router;