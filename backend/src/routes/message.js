"use strict";

const { express } = require("../configs/requiredBasics")
const router = express.Router()

const message = require("../controllers/message");
const isAdmin = require("../middlewares/authorized")
//router.use(isAdmin)

router.route("/").get(message.list).post(message.create);
router.route("/count").get(message.count);
router.route("/unread").get(message.unRead);
router.route("/recent").get(message.recent);


router
  .route("/:id")
  .get(message.read)
  .put(message.update)
  .patch(message.update)
  .delete(message.delete);

/* ------------------------------------------------------- */
module.exports = router;