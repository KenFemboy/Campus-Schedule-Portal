import { Student } from "../model/userModel.js";
import { Faculty } from "../model/userModel.js";

export const createStudent = async (req, res) => {
  try {
    const { email, id } = req.body;

    const existingStudent = await Student.findOne({ $or: [{ email }, { id }] });
    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists." });
    }

    const newStudent = new Student({ email, id });
    await newStudent.save();

    res.status(200).json({ message: "Student created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const createFaculty = async (req, res) => {
  try {
    const { email, id } = req.body;

    const existingFaculty = await Faculty.findOne({ $or: [{ email }, { id }] });
    if (existingFaculty) {
      return res.status(400).json({ message: "Faculty already exists." });
    }

    const newFaculty = new Faculty({ email, id });
    await newFaculty.save();

    res.status(200).json({ message: "Faculty created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
