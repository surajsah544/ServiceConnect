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

router.get("/", getAllWorks); //Read
router.get("/:id", getSingleWork);
router.post("/", employerLoggedIn, postAWork); //Create
router.patch("/:id", employerLoggedIn, updateASingleWork); //Update
router.delete("/:id", employerLoggedIn, deleteASingleWork); //Delete

module.exports = router;
