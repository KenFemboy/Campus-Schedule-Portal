import Schedule from "../model/scheduleModel.js";

export const createSchedule = async (req, res) => {
  try {
    const {
      course,
      code,
      startTime,
      endTime,
      status,
      professor,
      room,
      professorId,
    } = req.body;

    // Basic check for required fields
    if (!startTime || !endTime) {
      return res.status(400).json({ message: "Start and end time required." });
    }

    // Optional: check if endTime is after startTime
    if (new Date(startTime) >= new Date(endTime)) {
      return res
        .status(400)
        .json({ message: "End time must be after start time." });
    }

    // Optional: prevent duplicate codes (not usually needed if codes can repeat)
    const existingSchedule = await Schedule.findOne({ code });
    if (existingSchedule) {
      return res
        .status(400)
        .json({ message: "Schedule with this code already exists." });
    }

    // Optional: check for room schedule conflicts
    const conflict = await Schedule.findOne({
      room,
      $or: [
        {
          startTime: { $lt: new Date(endTime) },
          endTime: { $gt: new Date(startTime) },
        },
      ],
    });

    if (conflict) {
      return res.status(400).json({
        message: "Room is already booked during this time.",
        conflict,
      });
    }

    const newSchedule = new Schedule({
      course,
      code,
      startTime,
      endTime,
      status,
      professor,
      room,
      professorId,
    });

    await newSchedule.save();

    res.status(200).json({ message: "Schedule created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getSchedules = async (req, res) => {
  try {
    const allSchedules = await Schedule.find();
    if (!allSchedules || allSchedules.length === 0) {
      return res.status(404).json({ message: "Schedules Empty" });
    }
    res.status(200).json(allSchedules);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getScheduleByFacultyId = async (req, res) => {
  try {
    const { id } = req.params; // Get facultyid from query

    if (!id) {
      return res.status(400).json({ message: "Faculty ID is required" });
    }

    // Find schedules where professorId matches the facultyid
    const schedules = await Schedule.find({ professorId: id });

    if (schedules.length === 0) {
      return res
        .status(404)
        .json({ message: "No schedules found for this faculty" });
    }

    res.status(200).json(schedules);
  } catch (error) {
    console.error("Error fetching schedules:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch schedules", error: error.message });
  }
};
export const cancelSchedulebyCode = async (req, res) => {
  try {
    const updated = await Schedule.findOneAndUpdate(
      { code: req.params.code },
      { status: "cancelled" },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Schedule not found" });
    }
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error cancelling schedule", error });
  }
};

export const markScheduleAsUpcoming = async (req, res) => {
  try {
    const updated = await Schedule.findOneAndUpdate(
      { code: req.params.code }, // Find by the course code
      { status: "upcoming" }, // Update status to "upcoming"
      { new: true } // Return the updated document
    );

    if (!updated) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    res.json(updated); // Return the updated schedule
  } catch (error) {
    res.status(500).json({ message: "Error updating schedule", error });
  }
};
export const markScheduleAsOngoing = async (req, res) => {
  try {
    const updated = await Schedule.findOneAndUpdate(
      { code: req.params.code }, // Find by the course code
      { status: "ongoing" }, // Change status to "ongoing"
      { new: true } // Return the updated document
    );

    if (!updated) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    res.json(updated); // Return the updated schedule
  } catch (error) {
    res.status(500).json({ message: "Error updating schedule", error });
  }
};
