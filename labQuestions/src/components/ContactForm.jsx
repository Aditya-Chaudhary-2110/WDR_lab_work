import { useForm } from "react-hook-form";

// ContactForm component using react-hook-form
function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // function to handle form submission
  const onSubmit = (data) => {
    alert("Form submitted:\n" + JSON.stringify(data, null, 2));
  };

  // function to prefill the form with example data
  const handleFill = () => {
    setValue("fullName", "Jane Doe");
    setValue("message", "Hello! This is a prefilled message.");
  };

  // function to reset the form fields
  const handleReset = () => reset();

  return (
    <div style={{ marginTop: "20px", textAlign: "left" }}>
      <h3>Contact Form</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}
      >
        {/* Full Name */}
        <label>Full Name:</label>
        <input
          type="text"
          {...register("fullName", { required: "Full Name is required" })}
        />
        {errors.fullName && (
          <p style={{ color: "red" }}>{errors.fullName.message}</p>
        )}

        {/* Message */}
        <label>Message:</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          rows="4"
        />
        {errors.message && (
          <p style={{ color: "red" }}>{errors.message.message}</p>
        )}

        <div style={{ marginTop: "10px" }}>
          <button type="submit" style={{ marginRight: "10px" }}>
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            style={{ marginRight: "10px" }}
          >
            Reset
          </button>
          <button type="button" onClick={handleFill}>
            Fill Example Data
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
