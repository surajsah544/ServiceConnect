const express = require("express");
const router = express.Router();
const {
  getAllWorks,
  postAWork,
} = require("../../controller/employer/employerController");

router.get("/", getAllWorks);
router.post("/", postAWork);

module.exports = router;
