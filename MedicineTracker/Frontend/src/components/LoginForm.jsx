import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const LoginForm = () => {
  const { login } = useContext(UserContext);
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      alert("Please enter a username!");
      return;
    }
    login(username.trim());
  };

  return (
    <div className="login-container">
      <h2>Medicine Tracker Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
