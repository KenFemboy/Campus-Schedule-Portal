import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    match: [/^\d{6}$/, "Student ID must be a 6-digit number"],
    unique: true,
  },
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Schedule",
    },
  ],
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[a-zA-Z]\.[a-zA-Z]+\.\d{6}\.tc@umindanao\.edu\.ph$/,
      "Email must be in the format: a.lastname.123456.tc@umindanao.edu.ph",
    ],
  },
  password: {
    type: String,
    required: true,
    match: [
      /^[A-Za-z0-9]+$/,
      "Password must contain only letters and numbers (no spaces or special characters)",
    ],
  },
});

const facultySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9]+@umindanao\.edu\.ph$/,
      "Email must only contain letters and numbers before @umindanao.edu.ph",
    ],
  },
  id: {
    type: String,
    required: true,
    match: [/^\d{6}$/, "Faculty ID must be a 6-digit number"],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    match: [
      /^[A-Za-z0-9]+$/,
      "Password must contain only letters and numbers (no spaces or special characters)",
    ],
  },
  fullname: {
    type: String,
    required: true,
    match: [
      /^[A-Za-z0-9 ]+$/, // Note the space added after 0-9
      "Full name can contain only letters, numbers, and spaces (no special characters).",
    ],
  },
});

export const Student = mongoose.model("Student", studentSchema);
export const Faculty = mongoose.model("Faculty", facultySchema);
