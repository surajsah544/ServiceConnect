const WorkPost = require("../../models/employer/WorkPost");

//GET All Works
const getAllWorks = async (req, res) => {
  try {
    const work = await WorkPost.find({});
    res.status(200).json(work);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
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
    !requiredSkills
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const employerId = req.employer._id;
    const newWork = await WorkPost.create({
      title,
      description,
      serviceType,
      location,
      budget,
      paymentType,
      duration,
      employer: employerId,
      requiredSkills,
    });
    await newWork.save();
    res.status(201).json(newWork);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//GET A Single Work
const getSingleWork = async (req, res) => {
  const { id } = req.params.id;
  try {
    const work = await WorkPost.findOne({ _id: id });
    if (!work) {
      return res.status(404).json({ message: "Something Went Wrong" });
    }
    res.status(200).json(work);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//UPDATE A Work
const updateASingleWork = async (req, res) => {
  const { id } = req.params;
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
    const work = await WorkPost.updateOne(
      { _id: id },
      {
        title,
        description,
        serviceType,
        location,
        budget,
        paymentType,
        duration,
        employer,
        requiredSkills,
      }
    );
    if (!work) {
      return res.status(500).json({ message: "Something Went Wrong" });
    }
    res.status(200).json(work);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

//DELETE A Work
const deleteASingleWork = async (req, res) => {
  const { id } = req.params;
  try {
    const work = await WorkPost.deleteOne({ _id: id });
    if (!work) {
      return res.status(500).json({ message: "Something Went Wrong" });
    }
    res.status(200).json(work);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllWorks,
  postAWork,
  getSingleWork,
  updateASingleWork,
  deleteASingleWork,
};
