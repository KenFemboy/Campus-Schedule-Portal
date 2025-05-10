import { Student } from "../model/userModel.js";
import { Faculty } from "../model/userModel.js";

export const createStudent = async (req, res) => {
  try {
    const { email, id, password } = req.body;

    if (!email || !id || !password) {
      return res
        .status(400)
        .json({ message: "Email, ID, and Password are required." });
    }

    const existingStudent = await Student.findOne({ $or: [{ email }, { id }] });
    if (existingStudent) {
      return res.status(400).json({ message: "Student already exists." });
    }

    const newStudent = new Student({ email, id, password });
    await newStudent.save();

    res.status(200).json({ message: "Student created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const createFaculty = async (req, res) => {
  try {
    const { email, id, password } = req.body;

    if (!email || !id || !password) {
      return res
        .status(400)
        .json({ message: "Email, ID, and Password are required." });
    }

    const existingFaculty = await Faculty.findOne({ $or: [{ email }, { id }] });
    if (existingFaculty) {
      return res.status(400).json({ message: "Faculty already exists." });
    }

    const newFaculty = new Faculty({ email, id, password });
    await newFaculty.save();

    res.status(200).json({ message: "Faculty created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const favoriteSchedules = async (req, res) => {
  const { studentId, scheduleId } = req.body;

  if (!studentId || !scheduleId) {
    return res
      .status(400)
      .json({ message: "studentId and scheduleId are required." });
  }

  try {
    const student = await Student.findOne({ id: studentId });
    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }

    const isFavorite = student.favorites.includes(scheduleId);

    if (isFavorite) {
      // Remove from favorites
      student.favorites = student.favorites.filter(
        (id) => id.toString() !== scheduleId
      );
    } else {
      // Add to favorites
      student.favorites.push(scheduleId);
    }

    await student.save();

    return res.status(200).json({
      message: isFavorite ? "Removed from favorites." : "Added to favorites.",
      favorites: student.favorites,
    });
  } catch (error) {
    console.error("Error toggling favorite schedule:", error);
    return res.status(500).json({ message: "Server error." });
  }
};
export const getFavoriteSchedules = async (req, res) => {
  const { studentId } = req.params;

  try {
    const student = await Student.findOne({ id: studentId }).populate(
      "favorites"
    );

    if (!student) {
      return res.status(404).json({ message: "Student not found." });
    }

    return res.status(200).json({
      favorites: student.favorites, // full schedule documents
    });
  } catch (error) {
    console.error("Error fetching favorite schedules:", error);
    return res.status(500).json({ message: "Server error." });
  }
};

export const loginFaculty = async (req, res) => {
  const { userId, password } = req.body;

  try {
    const faculty = await Faculty.findOne({ id: userId });

    if (!faculty || faculty.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({
      message: "Login successful",
      userId: faculty.id,
      userType: "faculty",
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const loginStudent = async (req, res) => {
  const { userId, password } = req.body;

  try {
    const student = await Student.findOne({ id: userId });

    if (!student || student.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({
      message: "Login successful",
      userId: student.id,
      userType: "student",
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};
