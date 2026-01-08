const express = require("express");
const router = express.Router();

// Import all route files
const userRoutes = require("./userRoutes");
const medicineRoutes = require("./medicineRoutes");
const dosageScheduleRoutes = require("./dosageScheduleRoutes");
const dosageLogRoutes = require("./dosageLogRoutes");
const notificationRoutes = require("./notificationRoutes");

// Attach routes
router.use("/users", userRoutes);
router.use("/medicines", medicineRoutes);
router.use("/schedules", dosageScheduleRoutes);
router.use("/logs", dosageLogRoutes);
router.use("/notifications", notificationRoutes);

module.exports = router;
