const {
  DosageSchedule,
  DosageLog,
  Notification,
  User,
  Medicine,
} = require("../models");
const { Op } = require("sequelize");

let io = null;

// Set socket instance for real-time notifications
const setSocket = (socketInstance) => {
  io = socketInstance;
};

// Check all schedules to create notifications and log missed doses
const processNotifications = async () => {
  try {
    const now = new Date();

    // Fetch all schedules with Medicine and User (using aliases)
    const schedules = await DosageSchedule.findAll({
      include: [
        {
          model: Medicine,
          as: "Medicine", // alias defined in model
          include: [{ model: User, as: "User" }], // alias defined in model
        },
      ],
    });

    for (const schedule of schedules) {
      const user = schedule.Medicine?.User;
      if (!user) {
        console.warn(`User not found for Medicine ID ${schedule.Medicine?.id}`);
        continue;
      }

      // Parse schedule_time safely (string "HH:MM:SS" or Date)
      let scheduleTime = schedule.schedule_time;
      if (typeof scheduleTime === "string") {
        const [hours, minutes] = scheduleTime.split(":");
        scheduleTime = new Date();
        scheduleTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
      } else {
        scheduleTime = new Date(scheduleTime);
      }

      const graceEnd = new Date(scheduleTime);
      graceEnd.setMinutes(graceEnd.getMinutes() + schedule.grace_period);

      // Skip if already triggered today
      if (
        schedule.last_triggered &&
        new Date(schedule.last_triggered).toDateString() === now.toDateString()
      ) {
        continue;
      }

      // Create notification if within schedule + grace period
      if (now >= scheduleTime && now <= graceEnd) {
        const existingNotification = await Notification.findOne({
          where: {
            dosage_schedule_id: schedule.id,
            notified_at: { [Op.gte]: scheduleTime },
          },
        });

        if (!existingNotification) {
          const notification = await Notification.create({
            user_id: user.id,
            dosage_schedule_id: schedule.id,
            status: "pending",
            read: false,
          });

          // Emit real-time notification if socket is set
          if (io) {
            io.to(`user_${user.id}`).emit("new_notification", {
              message: `Time to take your dose for ${schedule.Medicine.name}: ${schedule.dosage}`,
              notification,
            });
          }

          schedule.last_triggered = now;
          await schedule.save();
          console.log(
            `Notification created for user ${user.name} for schedule ${schedule.id}`
          );
        }
      }

      // Mark dose as missed if past grace period and not taken
      if (now > graceEnd) {
        const logExists = await DosageLog.findOne({
          where: { dosage_schedule_id: schedule.id, status: "taken" },
        });

        if (!logExists) {
          await DosageLog.create({
            dosage_schedule_id: schedule.id,
            status: "missed",
          });
          console.log(`Missed dose logged for schedule ${schedule.id}`);
        }
      }
    }
  } catch (err) {
    console.error("Error processing notifications:", err.message);
  }
};

module.exports = { processNotifications, setSocket };
