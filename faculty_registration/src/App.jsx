import { useState } from "react";
import "./App.css";

import FacultyRegistrationForm from "./components/FacultyRegistrationForm";
import FacultyList from "./components/FacultyList";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [faculty, setFaculty] = useState([]);

  const addFaculty = (data) => {
    setFaculty((prev) => [...prev, data]);
  };

  const deleteFaculty = (id) => {
    setFaculty((prev) => prev.filter((f) => f.fid !== id));
  };

  return (
    <Router>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            backgroundColor: "blue",
            padding: 0,
            margin: 0,
          }}
        >
          <li style={{ padding: "10px 20px" }}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Faculty Registration
            </Link>
          </li>
          <li style={{ padding: "10px 20px" }}>
            <Link
              to="/faclist"
              style={{ textDecoration: "none", color: "white" }}
            >
              Faculty List
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<FacultyRegistrationForm onAddFaculty={addFaculty} />}
        />
        <Route
          path="/faclist"
          element={
            faculty.length === 0 ? (
              <p style={{ padding: "20px" }}>No faculty added yet.</p>
            ) : (
              <FacultyList faculty={faculty} onDelete={deleteFaculty} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
