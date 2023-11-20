const express = require("express");
const router = express.Router();

const { signup, signinAdmin } = require("./controller");

router.post("/signin-admin", signinAdmin);
router.post("/signup", signup);

module.exports = router;
