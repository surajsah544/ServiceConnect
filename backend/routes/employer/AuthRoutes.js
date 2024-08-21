const express = require("express");
const { signupEmployer } = require("../../controller/employer/AuthController");
const router = express.Router();

router.post("/login");
router.post("/signup", signupEmployer);

module.exports = router;
