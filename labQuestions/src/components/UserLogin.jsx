import { useState, useContext } from "react";
import { UserContext } from "../UserContext";

//  UserLogin component to handle user login
function UserLogin() {
  const { user, login } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: "", password: "" });
  const [error, setError] = useState("");

  // handling input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  // handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(formData.name, formData.password);
    if (!success) setError("User not registered");
  };

  if (user.isLoggedIn) return <h2>Welcome, {user.name}!</h2>;

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input
        type="text"
        name="name"
        placeholder="Username"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ marginRight: "10px" }}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        style={{ marginRight: "10px" }}
      />
      <button type="submit">Login</button>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </form>
  );
}

export default UserLogin;
