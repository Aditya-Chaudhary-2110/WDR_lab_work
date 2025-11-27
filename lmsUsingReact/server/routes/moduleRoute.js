import express from "express";
import {
  fetchModuleList,
  insertModule,
  updateModule,
} from "../controllers/moduleController.js";

const router = express.Router();

// GET all modules
router.get("/", fetchModuleList);

// INSERT a module
router.post("/", insertModule);

// UPDATE a module
router.put("/:id", updateModule);

export default router;
