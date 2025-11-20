import { useCourse } from "./context/CourseContext";
import "./CourseDelete.css";

function CourseDelete() {
  const { courses, deleteCourse } = useCourse();

  return (
    <table className="delete-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Duration</th>
          <th>Min Enrollment</th>
          <th>Max Enrollment</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.duration}</td>
            <td>{c.minEnrollment}</td>
            <td>{c.maxEnrollment}</td>

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
