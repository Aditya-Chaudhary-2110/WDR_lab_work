const express = require("express");
const router = express.Router();
const {
  getLogsBySchedule,
  markAsTaken,
  markAsMissed,
} = require("../Controllers/dosageLogController");

// Logs for a specific schedule
router.get("/schedule/:scheduleId", getLogsBySchedule);

// Mark a dose as taken
router.post("/take", markAsTaken);

// Mark a dose as missed manually
router.post("/miss", markAsMissed);

module.exports = router;
