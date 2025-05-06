import mongoose from "mongoose";
const scheduleSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Schedule", scheduleSchema);
