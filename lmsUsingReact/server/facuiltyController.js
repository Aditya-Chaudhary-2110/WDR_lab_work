import pool from "./db.js";

// Fetch all faculty
export async function fetchFacultyList(req, res) {
  try {
    const [result] = await pool.query("SELECT * FROM faculty");
    res.json(result);
  } catch (err) {
    console.log("Unable to fetch faculty list", err);
  }
}

// Insert new faculty
export async function insertFaculty(req, res) {
  try {
    const { facultyid, facultyname, age, dob, qualification } = req.body;

    const query =
      "INSERT INTO faculty (facultyid, facultyname, age, dob, qualification) VALUES (?, ?, ?, ?, ?)";

    const values = [facultyid, facultyname, age, dob, qualification];

    const [result] = await pool.query(query, values);

    res.json({ message: "Faculty inserted", insertId: result.insertId });
  } catch (err) {
    console.log("Unable to insert faculty", err);
  }
}

// Update faculty
export async function updateFaculty(req, res) {
  try {
    const { id } = req.params;
    const { facultyname, age, dob, qualification } = req.body;

    const query =
      "UPDATE faculty SET facultyname = ?, age = ?, dob = ?, qualification = ? WHERE facultyid = ?";

    const values = [facultyname, age, dob, qualification, id];

    await pool.query(query, values);

    res.json({ message: "Faculty updated" });
  } catch (err) {
    console.log("Unable to update faculty", err);
  }
}
