import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true,
    match: [/^[A-Za-z\s]+$/, "Course must contain only letters and spaces"],
  },
  code: {
    type: String,
    required: true,
    match: [/^\d{4}$/, "Code must be a 4-digit number"],
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        return this.startTime < value;
      },
      message: "End time must be after start time",
    },
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ["ongoing", "upcoming", "cancelled"],
      message: "Status must be either ongoing, upcoming, or cancelled",
    },
  },
  room: {
    type: String,
    required: true,
  },
  professor: {
    type: String,
    required: true,
    match: [
      /^[A-Za-z\s]+$/,
      "Professor name must contain only letters and spaces",
    ],
  },
  professorId: {
    type: String,
    required: true,
    match: [/^\d{6}$/, "Professor ID must be a 6-digit number"],
  },
});

export default mongoose.model("Schedule", scheduleSchema);
