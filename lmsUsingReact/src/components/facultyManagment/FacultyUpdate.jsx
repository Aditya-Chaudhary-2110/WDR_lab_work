import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import "./FacultyUpdate.css";
import { FacultyContext } from "./context/FacultyContext";

function FacultyUpdate() {
  const { facultyData, updateFaculty } = useContext(FacultyContext);

  const [searchId, setSearchId] = useState("");
  const [faculty, setFaculty] = useState(null);

  const { register, handleSubmit, reset, setValue } = useForm();

  const handleSearch = () => {
    const idToSearch = searchId.trim();

    const found = facultyData.find(
      (f) => f.id.toString().trim() === idToSearch
    );

    if (found) {
      setFaculty(found);

      setValue("id", found.id);
      setValue("name", found.name);
      setValue("age", found.age);
      setValue("qualification", found.qualification);
      setValue("joinedAt", found.joinedAt);
      setValue("status", found.status);
    } else {
      alert("Faculty not found");
      setFaculty(null);
      reset();
    }
  };

  const onSubmit = (data) => {
    updateFaculty(data);
    alert("Faculty updated successfully");

    reset();
    setFaculty(null);
    setSearchId("");
  };

  return (
    <div className="faculty-update">
      <h2>Update Faculty</h2>

      <div className="search-field">
        <input
          type="text"
          placeholder="Enter Faculty ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {faculty && (
        <form className="update-form" onSubmit={handleSubmit(onSubmit)}>
          <label>ID:</label>
          <input {...register("id")} readOnly />

          <label>Name:</label>
          <input {...register("name", { required: true })} />

          <label>Age:</label>
          <input type="number" {...register("age", { valueAsNumber: true })} />

          <label>Qualification:</label>
          <input {...register("qualification")} />

          <label>Joined At:</label>
          <input type="date" {...register("joinedAt")} />

          <label>Status:</label>
          <select {...register("status", { required: true })}>
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Left">Left</option>
          </select>

          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
}

export default FacultyUpdate;
