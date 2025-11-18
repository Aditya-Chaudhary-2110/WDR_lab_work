import { useForm } from "react-hook-form";
import "./CourseRegistration.css";

function CourseRegistration({ addCourse }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    addCourse(data);
    alert("your data is been saved");
    reset();
  };

  return (
    <form className="course-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="form-title">Course Registration</h2>

      <label>Course Id:</label>
      <input {...register("id", { required: true })} placeholder="Course ID" />

      <label>Name:</label>
      <input
        {...register("name", { required: true })}
        placeholder="Course Name"
      />

      <label>Description:</label>
      <input {...register("description")} placeholder="Description" />

      <label>Duration (hours):</label>
      <input
        type="number"
        {...register("duration", { valueAsNumber: true })}
        placeholder="Duration (hours)"
      />

      <label>Min Enrollment:</label>
      <input
        type="number"
        {...register("minEnrollment", { valueAsNumber: true })}
        placeholder="Min Enrollment"
      />

      <label>Max Enrollment:</label>
      <input
        type="number"
        {...register("maxEnrollment", { valueAsNumber: true })}
        placeholder="Max Enrollment"
      />

      <button type="submit" className="submit-btn">
        Register Course
      </button>
    </form>
  );
}

export default CourseRegistration;
