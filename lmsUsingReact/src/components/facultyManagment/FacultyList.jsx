import React, { useContext } from "react";
import { FacultyContext } from "./context/FacultyContext";
import "./FacultyList.css";

function FacultyList() {
  const { facultyData, deleteFaculty } = useContext(FacultyContext);

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
            {/* <th>Actions</th> */}
          </tr>
        </thead>

        <tbody>
          {facultyData.map((faculty) => (
            <tr key={faculty.id}>
              <td>{faculty.id}</td>
              <td>{faculty.name}</td>
              <td>{faculty.age}</td>
              <td>{faculty.qualification}</td>
              <td>{faculty.joinedAt}</td>
              <td>{faculty.status}</td>
              <td>
                {/* <button onClick={() => deleteFaculty(faculty.id)}>
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FacultyList;
