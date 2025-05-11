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
  markScheduleAsUpcoming,
  markScheduleAsOngoing,
} from "../controller/scheduleController.js";
import {
  announcements,
  createAnnouncement,
} from "../controller/announcementController.js";
import {
  getAllStudent,
  getAllFaculty,
  deleteAnnouncement,
} from "../controller/adminController.js";
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

//GET ADMIN
route.get("/students", getAllStudent);
route.get("/faculty", getAllFaculty);
// DELETE ADMIN
route.delete("/announcements/:title", deleteAnnouncement);
//PUT
route.put("/student/:id/unfavorite", removefromFavoriteSchedule);
route.put("/schedules/:code/cancel", cancelSchedulebyCode);
route.put("/schedules/:code/upcoming", markScheduleAsUpcoming);
route.put("/schedules/:code/ongoing", markScheduleAsOngoing);

export default route;
