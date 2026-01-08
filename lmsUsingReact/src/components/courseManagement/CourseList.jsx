import { useCourse } from "./context/CourseContext";
import "./CourseList.css";

function CourseList() {
  const { courses } = useCourse();

  return (
    <table className="course-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Duration</th>
          <th>Min Enrollment</th>
          <th>Max Enrollment</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.description}</td>
            <td>{c.duration}</td>
            <td>{c.minEnrollment}</td>
            <td>{c.maxEnrollment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CourseList;
