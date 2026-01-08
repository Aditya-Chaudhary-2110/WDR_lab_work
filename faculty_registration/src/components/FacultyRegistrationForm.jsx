import { useForm } from "react-hook-form";

const FacultyRegistrationForm = ({ onAddFaculty }) => {
  const { register, handleSubmit, reset } = useForm();

  const submitForm = (data) => {
    onAddFaculty(data);
    alert("Data saved");
    reset();
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
      <form
        onSubmit={handleSubmit(submitForm)}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "320px",
          padding: "20px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 5px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
          Faculty Registration
        </h2>

        <label htmlFor="fid">Faculty ID</label>
        <input
          {...register("fid", { required: true })}
          id="fid"
          type="text"
          placeholder="ID"
          style={inputStyle}
        />

        <label htmlFor="name">Name</label>
        <input
          {...register("name", { required: true })}
          id="name"
          type="text"
          placeholder="Enter your Name"
          style={inputStyle}
        />

        <label htmlFor="age">Age</label>
        <input
          {...register("age", { required: true })}
          id="age"
          type="number"
          min="18"
          max="100"
          placeholder="Enter your Age"
          style={inputStyle}
        />

        <label htmlFor="branch">Branch</label>
        <input
          {...register("branch", { required: true })}
          id="branch"
          type="text"
          placeholder="Enter your Branch"
          style={inputStyle}
        />

        <label htmlFor="qualification">Qualification</label>
        <input
          {...register("qualification", { required: true })}
          id="qualification"
          type="text"
          placeholder="Enter your Qualification"
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Save
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: "4px",
  marginBottom: "12px",
  fontSize: "14px",
  borderRadius: "6px",
  marginTop: "12px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  marginTop: "10px",
  width: "100%",
  padding: "10px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "15px",
  cursor: "pointer",
};

export default FacultyRegistrationForm;
