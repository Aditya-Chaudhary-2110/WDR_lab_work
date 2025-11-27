import express from "express";
import {
  fetchFacultyList,
  insertFaculty,
  updateFaculty,
} from "../controllers/facultyController.js";

const router = express.Router();

// GET all faculty
router.get("/", fetchFacultyList);

// INSERT a faculty
router.post("/", insertFaculty);

// UPDATE a faculty
router.put("/:id", updateFaculty);

export default router;
