import pool from "../db.js";

// Fetch all modules
export async function fetchModuleList(req, res) {
  try {
    const [result] = await pool.query("SELECT * FROM modules");
    res.json(result);
  } catch (err) {
    console.log("Unable to fetch modules", err);
  }
} 

// Insert module
export async function insertModule(req, res) {
  try {
    const { moduleid, modulename, courseid, description } = req.body;

    const query =
      "INSERT INTO modules (moduleid, modulename, courseid, description) VALUES (?, ?, ?, ?)";

    const values = [moduleid, modulename, courseid, description];

    const [result] = await pool.query(query, values);

    res.json({ message: "Module inserted", insertId: result.insertId });
  } catch (err) {
    console.log("Unable to insert module", err);
  }
}

// Update module
export async function updateModule(req, res) {
  try {
    const { id } = req.params;
    const { modulename, courseid, description } = req.body;

    const query =
      "UPDATE modules SET modulename = ?, courseid = ?, description = ? WHERE moduleid = ?";

    const values = [modulename, courseid, description, id];

    await pool.query(query, values);

    res.json({ message: "Module updated" });
  } catch (err) {
    console.log("Unable to update module", err);
  }
}
