const jwt = require("jsonwebtoken");
const AuthModel = require("../models/employer/AuthModel");

module.exports = async function (req, res, next) {
  console.log(req.cookies.token);
  if (!req.cookies.token) {
    return res.status(400).json({ error: "No User Found" });
  }

  try {
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    const employer = await AuthModel.findOne({
      email: decoded.email,
    }).select("-password");

    req.employer = employer;
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
