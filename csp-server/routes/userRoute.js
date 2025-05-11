import express from "express";
import {
  createStudent,
  createFaculty,
  favoriteSchedules,
  getFavoriteSchedules,
  loginFaculty,
  loginStudent,
  addtoFavoriteSchedule,
  removefromFavoriteSchedule,
  getFullnameStudent,
  getFullnameFaculty,
} from "../controller/userController.js";
import {
  createSchedule,
  getSchedules,
  getScheduleByFacultyId,
  cancelSchedulebyCode,
} from "../controller/scheduleController.js";
import {
  announcements,
  createAnnouncement,
} from "../controller/announcementController.js";

const route = express.Router();

//POST
route.post("/createStudent", createStudent);
route.post("/createFaculty", createFaculty);
route.post("/createSchedule", createSchedule);
route.post("/createAnnouncement", createAnnouncement);
route.post("/favorite", favoriteSchedules);

route.post("/loginFaculty", loginFaculty);
route.post("/loginStudent", loginStudent);
route.post("/student/:id/favorites", addtoFavoriteSchedule);
//GET
route.get("/student/:id/fullname", getFullnameStudent);
route.get("/faculty/:id/fullname", getFullnameFaculty);
route.get("/schedules", getSchedules);
route.get("/schedules/:id", getScheduleByFacultyId);
route.get("/announcements", announcements);
route.get("/student/:studentId/allfavorites", getFavoriteSchedules);
//PUT
route.put("/student/:id/unfavorite", removefromFavoriteSchedule);
route.put("/schedules/:code/cancel", cancelSchedulebyCode);

export default route;
