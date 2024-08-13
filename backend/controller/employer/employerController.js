const WorkPost = require("../../models/employer/WorkPost");

//GET All Works
const getAllWorks = (req, res) => {
  res.status(200).json({ message: "GET All The Works" });
};

//POST A Work
const postAWork = async (req, res) => {
  const {
    title,
    description,
    serviceType,
    location,
    budget,
    paymentType,
    duration,
    employer,
    requiredSkills,
  } = req.body;
  if (
    !title ||
    !description ||
    !serviceType ||
    !location ||
    !budget ||
    !paymentType ||
    !duration ||
    !employer ||
    !requiredSkills
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const newWork = await WorkPost.create({
      title,
      description,
      serviceType,
      location,
      budget,
      paymentType,
      duration,
      employer,
      requiredSkills,
    });
    await newWork.save();
    res.status(201).json(newWork);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//GET A Single Work
const getSingleWork = (req, res) => {
  res.status(200).json({ message: "GET A Single Work" });
};

module.exports = {
  getAllWorks,
  postAWork,
  getSingleWork,
};
