import { Student, Faculty } from "../model/userModel.js";
import Announcement from "../model/announcementModel.js";
export const getAllStudent = async (req, res) => {
  try {
    const students = await Student.find();
    if (!students || students.length === 0) {
      return res.status(404).json({ message: "No students found." });
    }
    res.status(200).json(students);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch students", error: error.message });
  }
};

// Get all faculty
export const getAllFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find();
    if (!faculty || faculty.length === 0) {
      return res.status(404).json({ message: "No faculty found." });
    }
    res.status(200).json(faculty);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch faculty", error: error.message });
  }
};

export const deleteAnnouncement = async (req, res) => {
  try {
    const { title } = req.params;

    if (!title) {
      return res.status(400).json({ message: "Title is required." });
    }

    const deleted = await Announcement.findOneAndDelete({ title });

    if (!deleted) {
      return res.status(404).json({ message: "Announcement not found." });
    }

    res.status(200).json({ message: "Announcement deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting announcement", error: error.message });
  }
};
