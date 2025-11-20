import { useState } from "react";
import { useCourse } from "./context/CourseContext";
import "./CourseDetail.css";

function CourseDetail() {
  const { courses } = useCourse();
  const [selectedId, setSelectedId] = useState("");

  const course = courses.find((c) => c.id === selectedId);

  return (
    <div className="detail-container">
      <select
        className="course-select"
        onChange={(e) => setSelectedId(e.target.value)}
        value={selectedId}
      >
        <option value="">Select Course</option>
        {courses.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      {course && (
        <div className="detail-card">
          <h3>Course Details</h3>
          <p>
            <strong>ID:</strong> {course.id}
          </p>
          <p>
            <strong>Name:</strong> {course.name}
          </p>
          <p>
            <strong>Description:</strong> {course.description}
          </p>
          <p>
            <strong>Duration:</strong> {course.duration}
          </p>
          <p>
            <strong>Min Enrollment:</strong> {course.minEnrollment}
          </p>
          <p>
            <strong>Max Enrollment:</strong> {course.maxEnrollment}
          </p>
        </div>
      )}
    </div>
  );
}

export default CourseDetail;
