const { Medicine, Stock, DosageSchedule, User } = require("../models");

// Get all medicines for a user with Stock and DosageSchedules
const getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.findAll({
      where: { user_id: req.params.userId },
      include: [
        { model: User, as: "User", attributes: ["id", "name", "email"] },
        { model: Stock, as: "Stock" },
        { model: DosageSchedule, as: "Schedules" },
      ],
    });
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get medicine by ID with Stock and DosageSchedules
const getMedicineById = async (req, res) => {
  try {
    const medicine = await Medicine.findByPk(req.params.id, {
      include: [
        { model: User, as: "User", attributes: ["id", "name", "email"] },
        { model: Stock, as: "Stock" },
        { model: DosageSchedule, as: "Schedules" },
      ],
    });
    if (!medicine) return res.status(404).json({ error: "Medicine not found" });

    res.json(medicine);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new medicine with initial stock
const createMedicine = async (req, res) => {
  try {
    const { user_id, name, type, notes, quantity } = req.body;

    const medicine = await Medicine.create({ user_id, name, type, notes });

    if (quantity !== undefined) {
      await Stock.create({ medicine_id: medicine.id, quantity });
    }

    const result = await Medicine.findByPk(medicine.id, {
      include: [
        { model: User, as: "User", attributes: ["id", "name", "email"] },
        { model: Stock, as: "Stock" },
        { model: DosageSchedule, as: "Schedules" },
      ],
    });

    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update medicine
const updateMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findByPk(req.params.id, {
      include: [{ model: Stock, as: "Stock" }],
    });
    if (!medicine) return res.status(404).json({ error: "Medicine not found" });

    const { name, type, notes, quantity } = req.body;

    await medicine.update({ name, type, notes });

    if (quantity !== undefined && medicine.Stock) {
      await medicine.Stock.update({ quantity });
    }

    const result = await Medicine.findByPk(medicine.id, {
      include: [
        { model: User, as: "User", attributes: ["id", "name", "email"] },
        { model: Stock, as: "Stock" },
        { model: DosageSchedule, as: "Schedules" },
      ],
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete medicine
const deleteMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findByPk(req.params.id);
    if (!medicine) return res.status(404).json({ error: "Medicine not found" });

    await medicine.destroy();

    res.json({ message: "Medicine deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllMedicines,
  getMedicineById,
  createMedicine,
  updateMedicine,
  deleteMedicine,
};
