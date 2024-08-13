const Employee = require("../../models/employer/employerModel");

//GET All Works
const getAllWorks = async (req, res) => {
  try {
    const employee = await Employee.find({});
    if (!employee) {
      return res.status(200).json({ message: "Something went wrong" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error.message);
  }
};

//POST A Work
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
