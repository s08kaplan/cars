"use strict"

const { express } = require("../configs/requiredBasics")
const auth = require("../controllers/auth")
const authMiddleware = require("../middlewares/authentication")
const getCurrentUser = require("../controllers/auth")

const router = express.Router()

router.post("/login", auth.login);
router.post("/refresh", auth.refresh)
router.get("/verify-token",auth.verifyToken)
router.post("/logout", auth.logout); 
router.get("/me", authMiddleware, auth.getCurrentUser);

module.exports = router;