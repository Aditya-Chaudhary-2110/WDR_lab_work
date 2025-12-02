// Importing useForm hook from react-hook-form for form handling
import { useForm } from "react-hook-form";

const StudentRegistration = ({ onAddStudent }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    onAddStudent(data);
    alert("your data is saved");
    reset();
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        background: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Student Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Student ID */}
        <label>Student ID</label>
        <br />
        <input
          {...register("stid")}
          placeholder="Student ID"
          required
          type="number"
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <br /> <br />
        {/* Name */}
        <label>Name</label>
        <br />
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
        <br /> <br />
        {/* Standard */}
        <label>Standard</label>
        <br />
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
        <br /> <br />
        {/* Roll Number */}
        <label>Roll No.</label>
        <br />
        <input
          {...register("rollno")}
          placeholder="Roll No."
          required
          type="number"
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <br /> <br />
        {/* Age */}
        <label>Age</label>
        <br />
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
        <br /> <br />
        {/* Submit button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default StudentRegistration;
