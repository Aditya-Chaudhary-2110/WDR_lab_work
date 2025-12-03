const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// DB connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ADITYA2110",
  database: "notes_app",
});

// GET all notes
app.get("/notes", (req, res) => {
  db.query("SELECT * FROM notes", (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
});

// CREATE note
app.post("/notes", (req, res) => {
  const { title, body } = req.body;
  db.query(
    "INSERT INTO notes (title, body) VALUES (?, ?)",
    [title, body],
    (err, result) => {
      if (err) return res.json(err);
      res.json({ id: result.insertId });
    }
  );
});

// UPDATE note
app.put("/notes/:id", (req, res) => {
  const { title, body } = req.body;
  const { id } = req.params;
  db.query(
    "UPDATE notes SET title=?, body=? WHERE id=?",
    [title, body, id],
    (err, result) => {
      if (err) return res.json(err);
      res.json(result);
    }
  );
});

// DELETE note
app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM notes WHERE id=?", [id], (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
});

app.listen(5000, () => console.log("Server running on 5000"));
