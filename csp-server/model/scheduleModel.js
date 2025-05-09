import mongoose from "mongoose";
const scheduleSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    match: [/^\d{4}$/, "Course Code must be a 4-digit number"],
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  professor: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Schedule", scheduleSchema);
