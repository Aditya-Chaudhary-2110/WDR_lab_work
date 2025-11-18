import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

/* ----------------------------------------------------------
   COURSE MANAGEMENT (fully commented / disabled)
---------------------------------------------------------- */

// import CourseNavigationBar from "./components/courseManagement/CourseNavigationBar";
// import CourseDelete from "./components/courseManagement/CourseDelete";
// import CourseDetail from "./components/courseManagement/CourseDetail";
// import CourseList from "./components/courseManagement/CourseList";
// import CourseRegistration from "./components/courseManagement/CourseRegistration";
// import CourseUpdate from "./components/courseManagement/CourseUpdate";

// const [courses, setCourses] = useState([]);
// const addCourse = (course) => setCourses([...courses, course]);
// const deleteCourse = (id) => setCourses(courses.filter((c) => c.id !== id));
// const updateCourse = (updated) =>
//   setCourses(courses.map((c) => (c.id === updated.id ? updated : c)));

/* ----------------------------------------------------------
   FACULTY MANAGEMENT (active)
---------------------------------------------------------- */

import FacultyNavigation from "./components/facultyManagment/FacultyNavigation";
import FacultyRegistration from "./components/facultyManagment/FacultyRegistration";
import FacultyList from "./components/facultyManagment/FacultyList";
import FacultyProfile from "./components/facultyManagment/FacultyProfile";
import FacultyUpdate from "./components/facultyManagment/FacultyUpdate";
import FacultyDelete from "./components/facultyManagment/FacuiltyDelete";

function App() {
  const [facultyData, setFacultyData] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  // Add new faculty with duplicate ID check
  const addFaculty = (data) => {
    if (
      facultyData.some(
        (f) => f.id.toString().trim() === data.id.toString().trim()
      )
    ) {
      alert("Faculty ID already exists");
      return;
    }
    setFacultyData([...facultyData, data]);
  };

  // Update existing faculty
  const updateFaculty = (updated) => {
    setFacultyData(
      facultyData.map((f) =>
        f.id.toString().trim() === updated.id.toString().trim() ? updated : f
      )
    );
    setSelectedFaculty(updated); // update selected faculty after edit
  };

  // Delete faculty by ID
  const deleteFaculty = (id) => {
    setFacultyData(
      facultyData.filter((f) => f.id.toString().trim() !== id.toString().trim())
    );
    if (
      selectedFaculty &&
      selectedFaculty.id.toString().trim() === id.toString().trim()
    ) {
      setSelectedFaculty(null);
    }
  };

  // Optional: select faculty by ID
  const selectFacultyById = (id) => {
    const faculty = facultyData.find(
      (f) => f.id.toString().trim() === id.toString().trim()
    );
    setSelectedFaculty(faculty || null);
  };

  return (
    <BrowserRouter>
      {/* Faculty Navigation Bar */}
      <FacultyNavigation />

      <Routes>
        {/* -------------------- FACULTY ROUTES -------------------- */}
        <Route
          path="/faculty/register"
          element={
            <FacultyRegistration
              addFaculty={addFaculty}
              facultyList={facultyData}
            />
          }
        />

        <Route
          path="/faculty/list"
          element={
            <FacultyList
              facultyData={facultyData}
              onSelect={(faculty) => setSelectedFaculty(faculty)}
            />
          }
        />

        <Route
          path="/faculty/profile"
          element={
            <FacultyProfile
              facultyData={facultyData}
              onSelect={selectFacultyById}
              selectedFaculty={selectedFaculty}
            />
          }
        />

        <Route
          path="/faculty/update"
          element={
            <FacultyUpdate
              facultyData={facultyData}
              selectedFaculty={selectedFaculty}
              onUpdate={updateFaculty}
            />
          }
        />

        <Route
          path="/faculty/delete"
          element={
            <FacultyDelete facultyData={facultyData} onDelete={deleteFaculty} />
          }
        />

        {/* -------------------- COURSE ROUTES (disabled) -------------------- */}

        {/* <Route path="/register" element={<CourseRegistration addCourse={addCourse} />} /> */}
        {/* <Route path="/list" element={<CourseList courses={courses} />} /> */}
        {/* <Route path="/detail" element={<CourseDetail courses={courses} />} /> */}
        {/* <Route path="/delete" element={<CourseDelete courses={courses} deleteCourse={deleteCourse} />} /> */}
        {/* <Route path="/update" element={<CourseUpdate courses={courses} updateCourse={updateCourse} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
