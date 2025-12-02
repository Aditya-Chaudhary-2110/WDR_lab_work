import { useState } from "react";
import { useCourse } from "./context/CourseContext";
import "./CourseUpdate.css";

function CourseUpdate() {
  const { courses, updateCourse } = useCourse();
  const [selectedId, setSelectedId] = useState("");
  const [form, setForm] = useState({});

  const selectedCourse = courses.find((c) => c.id === selectedId);

  const handleUpdate = () => {
    updateCourse(form);
    alert("Course updated");
  };

  return (
    <div className="update-container">
      <select
        onChange={(e) => {
          setSelectedId(e.target.value);
          const course = courses.find((c) => c.id === e.target.value);
          setForm(course || {});
        }}
        value={selectedId}
      >
        <option value="">Select Course</option>
        {courses.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>

      {selectedCourse && (
        <div className="update-form">
          <label htmlFor="">Name:</label>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Name"
          />
          <label htmlFor="">description:</label>
          <input
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Description"
          />
          <label htmlFor="">duration:</label>
          <input
            value={form.duration}
            onChange={(e) => setForm({ ...form, duration: e.target.value })}
            placeholder="Duration"
          />
          <label htmlFor="">min Enrollment:</label>
          <input
            value={form.minEnrollment}
            onChange={(e) =>
              setForm({ ...form, minEnrollment: e.target.value })
            }
            placeholder="Duration"
          />
          <label htmlFor="">max Enrollment:</label>
          <input
            value={form.maxEnrollment}
            onChange={(e) =>
              setForm({ ...form, maxEnrollment: e.target.value })
            }
            placeholder="Duration"
          />

          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
}

export default CourseUpdate;
