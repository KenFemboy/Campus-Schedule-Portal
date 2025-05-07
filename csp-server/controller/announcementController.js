import Announcement from "../model/announcementModel.js";

export const createAnnouncement = async (req, res) => {
  try {
    const { title, paragraph } = req.body;

    if (!title || !paragraph) {
      return res
        .status(400)
        .json({ message: "Title and paragraph are required." });
    }

    const newAnnouncement = new Announcement({ title, paragraph });
    await newAnnouncement.save();

    res.status(201).json({ message: "Announcement created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const announcements = async (req, res) => {
  try {
    const all = await Announcement.find();
    res.status(200).json(all);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
