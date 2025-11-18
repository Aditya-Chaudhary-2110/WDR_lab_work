import "./CourseList.css";

function CourseList({ courses }) {
  return (
    <table className="course-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.description}</td>
            <td>{c.duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CourseList;
