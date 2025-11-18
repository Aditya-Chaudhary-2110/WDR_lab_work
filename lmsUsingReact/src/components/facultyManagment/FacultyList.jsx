import React from "react";
import "./FacultyList.css";

function FacultyList({ facultyData, onSelect, onDelete }) {
  if (!facultyData || facultyData.length === 0) {
    return <div>No faculty records found.</div>;
  }

  return (
    <div className="faculty-list">
      <h2>Faculty List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Qualification</th>
            <th>Joined At</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {facultyData.map((faculty) => (
            <tr key={faculty.id} onClick={() => onSelect && onSelect(faculty)}>
              <td>{faculty.id}</td>
              <td>{faculty.name}</td>
              <td>{faculty.age}</td>
              <td>{faculty.qualification}</td>
              <td>{faculty.joinedAt}</td>
              <td>{faculty.status}</td>
              <td>
                {onDelete && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(faculty.id);
                    }}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FacultyList;
