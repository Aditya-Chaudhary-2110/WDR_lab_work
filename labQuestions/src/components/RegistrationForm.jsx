import { useForm } from "react-hook-form";
import { useState } from "react";

function RegistrationForm() {
  // using react-hook-form for form management
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submittedData, setSubmittedData] = useState(null);

  // handling submission
  const onSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div style={{ marginTop: "20px", textAlign: "left" }}>
      <h3>Registration Form</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
      >
        {/* Name */}
        <label>Name:</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        {/* Email */}
        <label>Email:</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        {/* Password */}
        <label>Password:</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}

        <button type="submit" style={{ marginTop: "10px" }}>
          Register
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h4>Submitted Data:</h4>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
