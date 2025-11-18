import "./CourseDelete.css";

function CourseDelete({ courses, deleteCourse }) {
  return (
    <table className="delete-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Duration</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.duration}</td>
            <td>
              <button className="delete-btn" onClick={() => deleteCourse(c.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CourseDelete;
