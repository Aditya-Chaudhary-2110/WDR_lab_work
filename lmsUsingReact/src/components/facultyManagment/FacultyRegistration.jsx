import React from "react";
import { useForm } from "react-hook-form";
import "./FacultyRegistration.css";

function FacultyRegistration({ addFaculty, facultyList }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Always treat ID as string
    data.id = data.id.toString().trim();

    // Duplicate check
    if (facultyList.some((f) => f.id.toString().trim() === data.id)) {
      alert("Faculty ID already exists");
      return;
    }

    addFaculty(data);
    alert("Faculty registered successfully");
    reset();
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Faculty Registration</h2>

      <label htmlFor="id">Faculty ID:</label>
      <input
        type="text"
        id="id"
        {...register("id", { required: "Faculty ID is required" })}
        placeholder="Faculty ID"
      />
      {errors.id && <p className="error">{errors.id.message}</p>}

      <label htmlFor="name">Name:</label>
      <input
        id="name"
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
      />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        {...register("age", {
          required: "Age is required",
          valueAsNumber: true,
          min: { value: 18, message: "Age must be at least 18" },
        })}
        placeholder="Age"
      />
      {errors.age && <p className="error">{errors.age.message}</p>}

      <label htmlFor="qualification">Qualification:</label>
      <input
        id="qualification"
        {...register("qualification", {
          required: "Qualification is required",
        })}
        placeholder="Qualification"
      />
      {errors.qualification && (
        <p className="error">{errors.qualification.message}</p>
      )}

      <label htmlFor="joinedAt">Joined At:</label>
      <input
        type="date"
        id="joinedAt"
        {...register("joinedAt", { required: "Joining date is required" })}
      />
      {errors.joinedAt && <p className="error">{errors.joinedAt.message}</p>}

      <label htmlFor="status">Status:</label>
      <select
        id="status"
        {...register("status", { required: "Status is required" })}
      >
        <option value="">Select Status</option>
        <option value="Active">Active</option>
        <option value="Left">Left</option>
      </select>
      {errors.status && <p className="error">{errors.status.message}</p>}

      <button type="submit">Register Faculty</button>
    </form>
  );
}

export default FacultyRegistration;
