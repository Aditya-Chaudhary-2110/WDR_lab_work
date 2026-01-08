const { User, Medicine, Notification } = require("../models");
const bcrypt = require("bcrypt");

// Helper: hash password
async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

// Get all users with related Medicines and Notifications
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
      include: [
        { model: Medicine, as: "Medicines" },
        { model: Notification, as: "Notifications" },
      ],
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get user by ID with related Medicines and Notifications
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
      include: [
        { model: Medicine, as: "Medicines" },
        { model: Notification, as: "Notifications" },
      ],
    });

    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create user
const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashed = await hashPassword(password);

    const newUser = await User.create({
      name,
      email,
      password: hashed,
      role,
    });

    const { password: _, ...clean } = newUser.toJSON();
    res.status(201).json(clean);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ error: "Email already exists" });
    }
    res.status(500).json({ error: err.message });
  }
};

// Update user
const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const updated = { ...req.body };
    if (updated.password) {
      updated.password = await hashPassword(updated.password);
    }

    await user.update(updated);

    const { password: _, ...clean } = user.toJSON();
    res.json(clean);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    await user.destroy();
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
