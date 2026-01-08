import React, { useState, useContext } from "react";
import { FacultyContext } from "./context/FacultyContext";

function FacultyDelete() {
  const { facultyData, deleteFaculty } = useContext(FacultyContext);
  const [id, setId] = useState("");

  const handleDelete = () => {
    const idToDelete = id.trim();

    const exists = facultyData.some(
      (f) => f.id.toString().trim() === idToDelete
    );

    if (!exists) {
      alert("Faculty ID not found");
      return;
    }

    if (
      window.confirm(
        `Are you sure you want to delete faculty ID ${idToDelete}?`
      )
    ) {
      deleteFaculty(idToDelete);
      setId("");
    }
  };

  return (
    <div className="faculty-delete">
      <h2>Delete Faculty</h2>

      <input
        type="text"
        placeholder="Enter Faculty ID to delete"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default FacultyDelete;
