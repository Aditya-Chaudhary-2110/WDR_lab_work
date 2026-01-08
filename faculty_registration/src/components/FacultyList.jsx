import React from "react";

const FacultyList = ({ faculty, onDelete }) => {
  const cellStyle = { border: "1px solid #ccc", padding: "8px" };
  const headerStyle = { ...cellStyle, backgroundColor: "#e6e6e6" };

  return (
    <div>
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
            <th style={headerStyle} scope="col">
              ID
            </th>
            <th style={headerStyle} scope="col">
              Name
            </th>
            <th style={headerStyle} scope="col">
              Age
            </th>
            <th style={headerStyle} scope="col">
              Branch
            </th>
            <th style={headerStyle} scope="col">
              Qualification
            </th>
            <th style={headerStyle} scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((f) => (
            <tr key={f.fid}>
              <td style={cellStyle}>{f.fid}</td>
              <td style={cellStyle}>{f.name}</td>
              <td style={cellStyle}>{f.age}</td>
              <td style={cellStyle}>{f.branch}</td>
              <td style={cellStyle}>{f.qualification}</td>
              <td style={cellStyle}>
                <button
                  onClick={() => onDelete(f.fid)}
                  style={{ padding: "4px 8px", cursor: "pointer" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyList;
