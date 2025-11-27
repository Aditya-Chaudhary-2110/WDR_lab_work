import express from "express";
import {
  fetchCourseList,
  insertCourse,
  updateCourse,
} from "../controllers/courseController.js";

const router = express.Router();

// GET all courses
router.get("/", fetchCourseList);

// INSERT a course
router.post("/", insertCourse);

// UPDATE a course
router.put("/:id", updateCourse);

export default router;
