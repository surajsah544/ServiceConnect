const mongoose = require("mongoose");
const { Schema } = mongoose;

const workPostSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  location: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
  budget: {
    type: Number,
    required: true,
  },
  paymentType: {
    type: String,
    enum: ["Fixed", "Hourly"],
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  employer: {
    type: String,
  },
  requiredSkills: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    default: "Open",
  },
  applicants: [
    {
      employeeId: {
        type: String,
        ref: "Employee",
      },
      appliedAt: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
        default: "Pending",
      },
    },
  ],
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

// Middleware to update the `updatedAt` field before saving
workPostSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("WorkPost", workPostSchema);
