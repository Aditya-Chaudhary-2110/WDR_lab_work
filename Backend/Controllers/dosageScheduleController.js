const {
  DosageSchedule,
  Medicine,
  DosageLog,
  Notification,
} = require("../models");

// Get all schedules for a medicine with Logs and Notifications
const getSchedulesByMedicine = async (req, res) => {
  try {
    const schedules = await DosageSchedule.findAll({
      where: { medicine_id: req.params.medicineId },
      include: [
        { model: Medicine, as: "Medicine" },
        { model: DosageLog, as: "Logs" },
        { model: Notification, as: "Notifications" },
      ],
    });
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a schedule by ID with Logs and Notifications
const getScheduleById = async (req, res) => {
  try {
    const schedule = await DosageSchedule.findByPk(req.params.id, {
      include: [
        { model: Medicine, as: "Medicine" },
        { model: DosageLog, as: "Logs" },
        { model: Notification, as: "Notifications" },
      ],
    });
    if (!schedule) return res.status(404).json({ error: "Schedule not found" });

    res.json(schedule);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new dosage schedule
const createSchedule = async (req, res) => {
  try {
    const { medicine_id, dosage, schedule_time, frequency, grace_period } =
      req.body;

    const medicine = await Medicine.findByPk(medicine_id);
    if (!medicine) return res.status(404).json({ error: "Medicine not found" });

    const newSchedule = await DosageSchedule.create({
      medicine_id,
      dosage,
      schedule_time,
      frequency,
      grace_period,
    });

    const result = await DosageSchedule.findByPk(newSchedule.id, {
      include: [
        { model: Medicine, as: "Medicine" },
        { model: DosageLog, as: "Logs" },
        { model: Notification, as: "Notifications" },
      ],
    });

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a dosage schedule
const updateSchedule = async (req, res) => {
  try {
    const schedule = await DosageSchedule.findByPk(req.params.id);
    if (!schedule) return res.status(404).json({ error: "Schedule not found" });

    const { dosage, schedule_time, frequency, grace_period } = req.body;

    await schedule.update({ dosage, schedule_time, frequency, grace_period });

    const result = await DosageSchedule.findByPk(schedule.id, {
      include: [
        { model: Medicine, as: "Medicine" },
        { model: DosageLog, as: "Logs" },
        { model: Notification, as: "Notifications" },
      ],
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a dosage schedule
const deleteSchedule = async (req, res) => {
  try {
    const schedule = await DosageSchedule.findByPk(req.params.id);
    if (!schedule) return res.status(404).json({ error: "Schedule not found" });

    await schedule.destroy();

    res.json({ message: "Schedule deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getSchedulesByMedicine,
  getScheduleById,
  createSchedule,
  updateSchedule,
  deleteSchedule,
};
