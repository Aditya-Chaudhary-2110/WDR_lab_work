import { useState } from "react";

const StudentProfile = ({ students }) => {
  const [searchId, setSearchId] = useState("");
  const [foundStudent, setFoundStudent] = useState(null);

  const handleSearch = () => {
    const student = students.find((s) => String(s.stid) === String(searchId));
    setFoundStudent(student || null);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Display Student Profile
      </h2>

      <input
        type="number"
        placeholder="Enter Student ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      />

      <button
        onClick={handleSearch}
        style={{
          width: "100%",
          padding: "10px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      >
        Search
      </button>

      {foundStudent ? (
        <div
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Student Details</h3>

          <p>
            <b>ID:</b> {foundStudent.stid}
          </p>
          <p>
            <b>Name:</b> {foundStudent.name}
          </p>
          <p>
            <b>Standard:</b> {foundStudent.standard}
          </p>
          <p>
            <b>Roll No:</b> {foundStudent.rollno}
          </p>
          <p>
            <b>Age:</b> {foundStudent.age}
          </p>
        </div>
      ) : (
        searchId && (
          <p
            style={{
              color: "red",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            No student found with ID {searchId}
          </p>
        )
      )}
    </div>
  );
};

export default StudentProfile;
