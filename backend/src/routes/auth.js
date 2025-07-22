"use strict"

const router = require("../configs/requiredBasics").express.Router()

const auth = require("../controllers/auth")

router.post("/login", auth.login);
router.post("/refresh", auth.refresh)
router.post("/verify-token",auth.verifyToken)
router.get("/logout", auth.logout); 

module.exports = router;