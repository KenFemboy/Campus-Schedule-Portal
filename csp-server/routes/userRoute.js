import express from "express";
import { createStudent, createFaculty } from "../controller/userController.js";
import {
  createSchedule,
  getSchedules,
} from "../controller/scheduleController.js";
import {
  announcements,
  createAnnouncement,
} from "../controller/announcementController.js";

const route = express.Router();
5;
//POST
route.post("/createStudent", createStudent);
route.post("/createFaculty", createFaculty);
route.post("/createSchedule", createSchedule);
route.post("/createAnnouncement", createAnnouncement);
//GET
route.get("/schedules", getSchedules);
route.get("/announcements", announcements);

export default route;
