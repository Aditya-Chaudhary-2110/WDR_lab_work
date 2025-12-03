import { useContext, useState } from "react";
import { NotesContext } from "./context/NotesContext.jsx";
import "./NotePage.css";

export default function NotesPage() {
  const { notes, addNote, deleteNote, updateNote } = useContext(NotesContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editId, setEditId] = useState(null);

  const submitHandler = () => {
    if (editId) {
      updateNote(editId, title, body);
      setEditId(null);
    } else {
      addNote(title, body);
    }
    setTitle("");
    setBody("");
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Notes App</h1>

      <div className="note-input">
        <input
          className="input-field"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="input-field"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <button className="button-primary" onClick={submitHandler}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <h2>All Notes</h2>
      <div className="notes-list">
        {notes.map((n) => (
          <div className="note-card" key={n.id}>
            <h3>{n.title}</h3>
            <p>{n.body}</p>

            <div className="note-actions">
              <button
                className="button-edit"
                onClick={() => {
                  setEditId(n.id);
                  setTitle(n.title);
                  setBody(n.body);
                }}
              >
                Edit
              </button>

              <button
                className="button-delete"
                onClick={() => deleteNote(n.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
