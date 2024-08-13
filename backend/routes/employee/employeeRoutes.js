const express = require("express");
const router = express.Router();
const {
  getAllWorks,
  getSingleWork,
  applyForWork,
} = require("../../controller/employee/employeeController");

router.get("/", getAllWorks);
router.get("/:id", getSingleWork);
router.post("/", applyForWork);

module.exports = router;
