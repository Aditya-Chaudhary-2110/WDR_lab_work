import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import CourseNavigationBar from "./components/courseManagement/CourseNavigationBar";
import CourseDelete from "./components/courseManagement/CourseDelete";
import CourseDetail from "./components/courseManagement/CourseDetail";
import CourseList from "./components/courseManagement/CourseList";
import CourseRegistration from "./components/courseManagement/courseRegistration";
import CourseUpdate from "./components/courseManagement/CourseUpdate";

function App() {
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => setCourses([...courses, course]);
  const deleteCourse = (id) => setCourses(courses.filter((c) => c.id !== id));
  const updateCourse = (updated) =>
    setCourses(courses.map((c) => (c.id === updated.id ? updated : c)));

  return (
    <BrowserRouter>
      <CourseNavigationBar />
      <Routes>
        <Route
          path="/register"
          element={<CourseRegistration addCourse={addCourse} />}
        />
        <Route path="/list" element={<CourseList courses={courses} />} />
        <Route path="/detail" element={<CourseDetail courses={courses} />} />
        <Route
          path="/delete"
          element={
            <CourseDelete courses={courses} deleteCourse={deleteCourse} />
          }
        />
        <Route
          path="/update"
          element={
            <CourseUpdate courses={courses} updateCourse={updateCourse} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
