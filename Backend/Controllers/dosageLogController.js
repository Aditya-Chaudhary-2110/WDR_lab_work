const { DosageLog, DosageSchedule } = require("../models");
const { Op } = require("sequelize");

// Get logs by schedule with related DosageSchedule
const getLogsBySchedule = async (req, res) => {
  try {
    const logs = await DosageLog.findAll({
      where: { dosage_schedule_id: req.params.scheduleId },
      order: [["taken_at", "DESC"]],
      include: [{ model: DosageSchedule, as: "DosageSchedule" }],
    });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Helper: Check if a log already exists today
const logExistsToday = async (dosage_schedule_id) => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const existingLog = await DosageLog.findOne({
    where: {
      dosage_schedule_id,
      taken_at: { [Op.gte]: startOfDay },
    },
  });

  return existingLog ? true : false;
};

// Mark dose as taken
const markAsTaken = async (req, res) => {
  try {
    const { dosage_schedule_id } = req.body;

    // Prevent duplicate log
    if (await logExistsToday(dosage_schedule_id)) {
      return res.status(400).json({ error: "Dose already logged for today" });
    }

    const log = await DosageLog.create({ dosage_schedule_id, status: "taken" });
    const result = await DosageLog.findByPk(log.id, {
      include: [{ model: DosageSchedule, as: "DosageSchedule" }],
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mark dose as missed
const markAsMissed = async (req, res) => {
  try {
    const { dosage_schedule_id } = req.body;

    // Prevent duplicate log
    if (await logExistsToday(dosage_schedule_id)) {
      return res.status(400).json({ error: "Dose already logged for today" });
    }

    const log = await DosageLog.create({
      dosage_schedule_id,
      status: "missed",
    });
    const result = await DosageLog.findByPk(log.id, {
      include: [{ model: DosageSchedule, as: "DosageSchedule" }],
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getLogsBySchedule, markAsTaken, markAsMissed };
