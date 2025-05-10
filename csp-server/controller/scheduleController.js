import Schedule from "../model/scheduleModel.js";

export const createSchedule = async (req, res) => {
  try {
    const { course, code, time, status, professor, room, professorId } =
      req.body;

    const existingSchedule = await Schedule.findOne({ code });
    if (existingSchedule) {
      return res
        .status(400)
        .json({ message: "Schedule with this code already exists." });
    }

    const newSchedule = new Schedule({
      course,
      code,
      time,
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
