const express = require("express");
const router = express.Router();
const {
  getSchedulesByMedicine,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule,
} = require("../Controllers/dosageScheduleController");

// CRUD routes
router.get("/medicine/:medicineId", getSchedulesByMedicine);
router.get("/:id", getScheduleById);
router.post("/", createSchedule);
router.put("/:id", updateSchedule);
router.delete("/:id", deleteSchedule);

module.exports = router;
