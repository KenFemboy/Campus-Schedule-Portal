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
  time: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        // Accepts HH:00 format, between 07:00 and 22:00
        const match = /^([7-9]|1[0-9]|2[0-2]):00$/.test(v);
        return match;
      },
      message: "Time must be between 07:00 and 22:00 in HH:00 format",
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
  professorId: {
    type: String,
    required: true,
    match: [/^\d{6}$/, "Faculty ID must be a 6-digit number"],
  },
});

export default mongoose.model("Schedule", scheduleSchema);
