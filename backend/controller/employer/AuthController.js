const bcrypt = require("bcrypt");
const { generateToken } = require("../../config/generateToken");
const AuthModel = require("../../models/employer/AuthModel");

//Login Employer
const loginEmployer = async (req, res) => {
  let { email, password } = req.body;

  let employer = await AuthModel.findOne({ email: email });
  if (!employer) {
    return res.status(401).json({ message: "Email or Password Incorrect" });
  }

  bcrypt.compare(password, employer.password, (error, result) => {
    if (result) {
      let token = generateToken(employer);
      res.cookie("token", token);
      res.status(201).json({ message: "You Can Login" });
    } else {
      res.status(401).json({ message: "Email or Password Incorrect" });
    }
  });
};

//Register or SignUp Employer
const signupEmployer = async (req, res) => {
  const { name, email, password, phone, role, address } = req.body;
  if (!name || !email || !password || !phone || !role || !address) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingEmployer = await AuthModel.findOne({ email });

  if (existingEmployer) {
    return res.status(400).json({ message: "User Already Exists" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const employer = await AuthModel.create({
      name,
      email,
      password: hash,
      phone,
      role,
      address,
    });

    const token = generateToken(employer);
    res.cookie("token", token);

    res
      .status(200)
      .json({ message: "User Created Successfully", employer, token });
  } catch (error) {
    res.status(400).json({ "error message": error.message });
    console.log(error.message);
  }
};

module.exports = { loginEmployer, signupEmployer };
