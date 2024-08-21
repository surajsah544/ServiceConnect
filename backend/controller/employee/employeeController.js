const WorkPost = require("../../models/employer/WorkPost");

//GET All Works
const getAllWorks = async (req, res) => {
  try {
    const work = await WorkPost.find({});
    if (!work) {
      return res.status(200).json({ message: "Something went wrong" });
    }
    res.status(200).json(work);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error.message);
  }
};

//POST Apply for Work
const applyForWork = (req, res) => {
  res.status(200).json({ message: "POST A Work" });
};

//GET A Single Work
const getSingleWork = (req, res) => {
  res.status(200).json({ message: "GET A Single Work" });
};

module.exports = {
  getAllWorks,
  applyForWork,
  getSingleWork,
};
