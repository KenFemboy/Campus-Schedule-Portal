import mongoose from "mongoose";
const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Announcement", announcementSchema);
