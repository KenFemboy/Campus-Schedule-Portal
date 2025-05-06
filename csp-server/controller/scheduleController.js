import Schedule from "../model/scheduleModel.js";

export const createSchedule = async (req, res) => {
  try {
    const { course, code, time, status } = req.body;

    const existingSchedule = await Schedule.findOne({ code });
    if (existingSchedule) {
      return res
        .status(400)
        .json({ message: "Schedule with this code already exists." });
    }

    const newSchedule = new Schedule({ course, code, time, status });
    await newSchedule.save();

    res.status(200).json({ message: "Schedule created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
