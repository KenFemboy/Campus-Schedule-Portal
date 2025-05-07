import express from "express";
import { createStudent, createFaculty } from "../controller/userController.js";
import { createSchedule } from "../controller/scheduleController.js";
import { getSchedules } from "../controller/scheduleController.js";
const route = express.Router();
5;
//POST
route.post("/createStudent", createStudent);
route.post("/createFaculty", createFaculty);
route.post("/createSchedule", createSchedule);

//GET
route.get("/schedules", getSchedules);

export default route;
