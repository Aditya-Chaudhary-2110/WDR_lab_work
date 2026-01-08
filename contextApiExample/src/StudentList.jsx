import { useContext } from "react";
import { StudentContext } from "./StudentContext";

function StudentList() {
  const { students } = useContext(StudentContext);

  if (!students || students.length === 0) {
    return (
      <p
        style={{
          marginTop: "20px",
          textAlign: "center",
          fontSize: "16px",
        }}
      >
        No data yet.
      </p>
    );
  }

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <thead>
        <tr>
          <th style={headerStyle}>ID</th>
          <th style={headerStyle}>Name</th>
          <th style={headerStyle}>Standard</th>
          <th style={headerStyle}>Roll No.</th>
          <th style={headerStyle}>Age</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s) => (
          <tr key={s.stid}>
            <td style={cellStyle}>{s.stid}</td>
            <td style={cellStyle}>{s.name}</td>
            <td style={cellStyle}>{s.standard}</td>
            <td style={cellStyle}>{s.rollno}</td>
            <td style={cellStyle}>{s.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const headerStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  backgroundColor: "#e6e6e6",
};

const cellStyle = {
  border: "1px solid #ccc",
  padding: "8px",
};

export default StudentList;
