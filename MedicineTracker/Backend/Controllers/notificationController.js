const { Notification, User, DosageSchedule } = require("../models");

// Get all notifications for a user with related User and DosageSchedule
const getUserNotifications = async (req, res) => {
  try {
    const userId = req.params.userId;

    const notifications = await Notification.findAll({
      where: { user_id: userId },
      order: [["notified_at", "DESC"]],
      include: [
        { model: User, as: "User", attributes: ["id", "name", "email"] },
        { model: DosageSchedule, as: "DosageSchedule" },
      ],
    });

    res.json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mark a notification as read
const markAsRead = async (req, res) => {
  try {
    const notificationId = req.params.id;

    const notification = await Notification.findByPk(notificationId);
    if (!notification) {
      return res.status(404).json({ error: "Notification not found" });
    }

    notification.read = true;
    notification.status = "sent";
    await notification.save();

    res.json({ message: "Notification marked as read", notification });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getUserNotifications, markAsRead };
