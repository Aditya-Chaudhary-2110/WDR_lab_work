import pool from "./db";

//to create a function to fetch data from mysql table

export async function fetchStudentsList(req, res) {
  try {
    //fetching data from MySQL table
    const [result] = await pool.query("select * from student");
    //setting this data inot response in json
    res.json(result);
  } catch (err) {
    console.log("Unable to insert data ", err);
  }
}

export async function insertStudent(req, res) {
  try {
    const { name, email, age } = req.body; // get data from frontend

    const query = "INSERT INTO student (name, email, age) VALUES (?, ?, ?)";
    const values = [name, email, age];

    const [result] = await pool.query(query, values);

    res.json({ message: "Student inserted", insertId: result.insertId });
  } catch (err) {
    console.log("Unable to insert data ", err);
  }
}

export async function updateStudent(req, res) {
  try {
    const { id } = req.params; // /update/:id
    const { name, email, age } = req.body; // new values

    const query =
      "UPDATE student SET name = ?, email = ?, age = ? WHERE id = ?";
    const values = [name, email, age, id];

    await pool.query(query, values);

    res.json({ message: "Student updated" });
  } catch (err) {
    console.log("Unable to update data ", err);
  }
}

export async function deleteStudent(req, res) {
  try {
    const { id } = req.params; // /delete/:id

    const query = "DELETE FROM student WHERE id = ?";
    await pool.query(query, [id]);

    res.json({ message: "Student deleted" });
  } catch (err) {
    console.log("Unable to delete data ", err);
  }
}
