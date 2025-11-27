import express from "express";
import {
  fetchStudentsList,
  insertStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

// GET all students
router.get("/", fetchStudentsList);

// INSERT a student
router.post("/", insertStudent);

// UPDATE a student
router.put("/:id", updateStudent);

// DELETE a student
router.delete("/:id", deleteStudent);

export default router;
