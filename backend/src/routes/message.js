"use strict";

const { express } = require("../configs/requiredBasics")
const router = express.Router()

const message = require("../controllers/message");
const isAdmin = require("../middlewares/authorized")
router.use(isAdmin)

router.get("/count", isAdmin, message.count);
router.get("/unread", isAdmin, message.unRead);
router.get("/recent", isAdmin, message.recent);

router.route("/")
.get(message.list)
.post(message.create);



router
  .route("/:id")
  .get(message.read)
  .put(message.update)
  .patch(message.update)
  .delete(message.delete);


module.exports = router;