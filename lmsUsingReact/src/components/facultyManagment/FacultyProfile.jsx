import React, { useState } from "react";
import { useFaculty } from "./context/FacultyContext";
import "./FacultyProfile.css";

function FacultyProfile() {
  const { facultyData } = useFaculty();
  const [searchId, setSearchId] = useState("");
  const [faculty, setFaculty] = useState(null);

  const handleSearch = () => {
    const found = facultyData.find(
      (f) => f.id.toString().trim() === searchId.trim()
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
