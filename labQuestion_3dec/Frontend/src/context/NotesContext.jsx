import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // Fetch
  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5000/notes");
    setNotes(res.data);
  };

  // Add
  const addNote = async (title, body) => {
    await axios.post("http://localhost:5000/notes", { title, body });
    fetchNotes();
  };

  // Update
  const updateNote = async (id, title, body) => {
    await axios.put(`http://localhost:5000/notes/${id}`, { title, body });
    fetchNotes();
  };

  // Delete
  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/notes/${id}`);
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};
