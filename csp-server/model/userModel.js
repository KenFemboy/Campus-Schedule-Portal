import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: String,
    required: true,
    match: [/^\d{6}$/, "Student ID must be a 6-digit number"],
    unique: true,
  },
});

const facultySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  id: {
    type: String,
    required: true,
    match: [/^\d{6}$/, "Faculty ID must be a 6-digit number"],
    unique: true,
  },
});

export const Student = mongoose.model("Student", studentSchema);
export const Faculty = mongoose.model("Faculty", facultySchema);
