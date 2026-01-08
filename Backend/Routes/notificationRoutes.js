const express = require("express");
const router = express.Router();
const {
  getUserNotifications,
  markAsRead,
} = require("../Controllers/notificationController");

// Get all notifications for a user
router.get("/user/:userId", getUserNotifications);

// Mark a notification as read
router.patch("/:id/read", markAsRead);

module.exports = router;
