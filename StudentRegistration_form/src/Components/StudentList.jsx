function StudentList({ students }) {
  if (students.length === 0)
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
          <th
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              backgroundColor: "#e6e6e6",
            }}
          >
            ID
          </th>
          <th
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              backgroundColor: "#e6e6e6",
            }}
          >
            Name
          </th>
          <th
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              backgroundColor: "#e6e6e6",
            }}
          >
            Standard
          </th>
          <th
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              backgroundColor: "#e6e6e6",
            }}
          >
            Roll No.
          </th>
          <th
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              backgroundColor: "#e6e6e6",
            }}
          >
            Age
          </th>
        </tr>
      </thead>

      <tbody>
        {students.map((s, i) => (
          <tr key={i}>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {s.stid}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {s.name}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {s.standard}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {s.rollno}
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {s.age}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
