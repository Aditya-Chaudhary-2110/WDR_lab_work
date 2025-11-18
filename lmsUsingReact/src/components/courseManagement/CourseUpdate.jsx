import { useState } from "react";
import { useForm } from "react-hook-form";
import "./CourseUpdate.css";

function CourseUpdate({ courses, updateCourse }) {
  const [selectedId, setSelectedId] = useState("");
  const course = courses.find((c) => c.id === selectedId);

  const { register, handleSubmit, reset, setValue } = useForm();

  const handleSelect = (e) => {
    const id = e.target.value;
    setSelectedId(id);
    const selectedCourse = courses.find((c) => c.id === id);
    if (selectedCourse) {
      setValue("id", selectedCourse.id);
      setValue("name", selectedCourse.name);
      setValue("description", selectedCourse.description);
      setValue("duration", selectedCourse.duration);
      setValue("minEnrollment", selectedCourse.minEnrollment);
      setValue("maxEnrollment", selectedCourse.maxEnrollment);
    }
  };

  const onSubmit = (data) => {
    updateCourse(data);
    reset();
    setSelectedId("");
  };

  return (
    <div className="update-container">
      <select
        className="update-select"
        onChange={handleSelect}
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
        <form className="update-form" onSubmit={handleSubmit(onSubmit)}>
          <h3>Update Course</h3>

          <label>ID</label>
          <input {...register("id")} readOnly />

          <label>Name</label>
          <input {...register("name")} placeholder="Course Name" />

          <label>Description</label>
          <input {...register("description")} placeholder="Description" />

          <label>Duration</label>
          <input
            type="number"
            {...register("duration")}
            placeholder="Duration"
          />

          <label>Min Enrollment</label>
          <input
            type="number"
            {...register("minEnrollment")}
            placeholder="Min Enrollment"
          />

          <label>Max Enrollment</label>
          <input
            type="number"
            {...register("maxEnrollment")}
            placeholder="Max Enrollment"
          />

          <button type="submit" className="update-btn">
            Update Course
          </button>
        </form>
      )}
    </div>
  );
}

export default CourseUpdate;
