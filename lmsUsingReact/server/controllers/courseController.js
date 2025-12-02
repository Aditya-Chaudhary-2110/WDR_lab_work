import pool from "../db.js";

// Fetch all courses
export async function fetchCourseList(req, res) {
  try {
    const [result] = await pool.query("SELECT * FROM course");
    res.json(result);
  } catch (err) {
    console.log("Unable to fetch course list", err);
  }
}

// Insert new course
export async function insertCourse(req, res) {
  try {
    const { courseid, coursename, duration, min_enrollment, max_enrollment } =
      req.body;

    const query =
      "INSERT INTO course (courseid, coursename, duration, min_enrollment, max_enrollment) VALUES (?, ?, ?, ?, ?)";

    const values = [
      courseid,
      coursename,
      duration,
      min_enrollment,
      max_enrollment,
    ];

    const [result] = await pool.query(query, values);

    res.json({ message: "Course inserted", insertId: result.insertId });
  } catch (err) {
    console.log("Unable to insert course", err);
  }
}

// Update course
export async function updateCourse(req, res) {
  try {
    const { id } = req.params;
    const { coursename, duration, min_enrollment, max_enrollment } = req.body;

    const query =
      "UPDATE course SET coursename = ?, duration = ?, min_enrollment = ?, max_enrollment = ? WHERE courseid = ?";

    const values = [coursename, duration, min_enrollment, max_enrollment, id];

    await pool.query(query, values);

    res.json({ message: "Course updated" });
  } catch (err) {
    console.log("Unable to update course", err);
  }
}
