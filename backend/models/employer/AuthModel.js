const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const employerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    default: "Employer",
  },
  address: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

// Middleware to hash the password before saving
employerSchema.pre("save", async function (next) {
  const employer = this;
  if (!employer.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    employer.password = await bcrypt.hash(employer.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("employer", employerSchema);
