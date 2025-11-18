import React, { useState } from "react";

function FacultyDelete({ facultyData, onDelete }) {
  const [id, setId] = useState("");

  const handleDelete = () => {
    const idToDelete = id.trim();
    if (!facultyData.some((f) => f.id.toString().trim() === idToDelete)) {
      alert("Faculty ID not found");
      return;
    }
    if (
      window.confirm(
        `Are you sure you want to delete faculty ID ${idToDelete}?`
      )
    ) {
      onDelete(idToDelete);
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
