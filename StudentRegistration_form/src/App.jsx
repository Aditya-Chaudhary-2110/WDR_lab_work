import { useState } from "react";
import "./App.css";

// Importing all three components
import StudentRegistration from "./Components/StudentRegistration.jsx";
import StudentList from "./Components/StudentList.jsx";
import StudentProfile from "./Components/StudentProfile.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  // State to store all student data as an array
  const [students, setStudent] = useState([]);

  // Function to add a new student to the list
  const addStudent = (data) => {
    // Use previous state, spread old students, and add the new one
    setStudent((prev) => [...prev, data]);
  };

  return (
    <>
      <Router>
        <div>
          <ul
            style={{
              listStyleType: "none",
              backgroundColor: "blue",
              width: "100%",
              float: "right",
            }}
          >
            <li
              style={{
                float: "left",
                backgroundColor: "blue",
                padding: "10px 20px",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Student Registration
              </Link>
            </li>
            <li
              style={{
                float: "left",
                backgroundColor: "blue",
                padding: "10px 20px",
              }}
            >
              <Link
                to="/stdlist"
                style={{ textDecoration: "none", color: "white" }}
              >
                Student List
              </Link>
            </li>
            <li
              style={{
                float: "left",
                backgroundColor: "blue",
                padding: "10px 20px",
              }}
            >
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "white" }}
              >
                Student Profile
              </Link>
            </li>
          </ul>
        </div>
        <br />
        <br />
        <Routes>
          <Route
            path="/"
            element={<StudentRegistration onAddStudent={addStudent} />}
          />
          <Route
            path="/stdlist"
            element={<StudentList students={students} />}
          />
          <Route
            path="/Profile"
            element={<StudentProfile students={students} />}
          />
        </Routes>
      </Router>
    </>
  );
}
import { Form } from "react-hook-form";

export default App;
