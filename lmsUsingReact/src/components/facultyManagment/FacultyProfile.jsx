import React, { useState } from "react";
import "./FacultyProfile.css";

function FacultyProfile({ facultyData }) {
  const [searchId, setSearchId] = useState("");
  const [faculty, setFaculty] = useState(null);

  const handleSearch = () => {
    const idToSearch = searchId.trim();
    const found = facultyData.find(
      (f) => f.id.toString().trim() === idToSearch
    );
    setFaculty(found || null);
  };

  const formattedDate = faculty
    ? new Date(faculty.joinedAt).toLocaleDateString()
    : "";

  return (
    <div className="faculty-profile">
      <h2>Faculty Profile</h2>

      <div className="search-field">
        <input
          type="text"
          placeholder="Enter Faculty ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {faculty ? (
        <dl>
          <dt>ID:</dt>
          <dd>{faculty.id}</dd>

          <dt>Name:</dt>
          <dd>{faculty.name}</dd>

          <dt>Age:</dt>
          <dd>{faculty.age}</dd>

          <dt>Qualification:</dt>
          <dd>{faculty.qualification}</dd>

          <dt>Joined At:</dt>
          <dd>{formattedDate}</dd>

          <dt>Status:</dt>
          <dd>{faculty.status}</dd>
        </dl>
      ) : (
        <p>{searchId ? "Faculty not found." : "Please search by ID."}</p>
      )}
    </div>
  );
}

export default FacultyProfile;
