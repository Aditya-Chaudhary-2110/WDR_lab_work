import { useForm } from "react-hook-form";
import { useContext } from "react";
import { StudentContext } from "./StudentContext";

const StudentRegistration = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addStudent } = useContext(StudentContext);

  const onSubmit = (data) => {
    addStudent(data);
    alert("your data is saved");
    reset();
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "30px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Student Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Student ID</label>
        <input
          {...register("stid")}
          placeholder="Student ID"
          type="number"
          required
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <label>Name</label>
        <input
          {...register("name")}
          placeholder="Name"
          required
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <label>Standard</label>
        <input
          {...register("standard")}
          placeholder="Standard"
          required
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <label>Roll No.</label>
        <input
          {...register("rollno")}
          placeholder="Roll No."
          type="number"
          required
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <label>Age</label>
        <input
          {...register("age")}
          placeholder="Age"
          type="number"
          required
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default StudentRegistration;
