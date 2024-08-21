const express = require("express");
const router = express.Router();

const {
  getAllWorks,
  postAWork,
  getSingleWork,
  updateASingleWork,
  deleteASingleWork,
} = require("../../controller/employer/employerController");
const employerLoggedIn = require("../../middleware/employerLoggedIn");

router.get("/", getAllWorks);
router.get("/:id", getSingleWork);
router.post("/", employerLoggedIn, postAWork);
router.patch("/:id", employerLoggedIn, updateASingleWork);
router.delete("/:id", employerLoggedIn, deleteASingleWork);

module.exports = router;
