import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ---------------- COURSE MANAGEMENT (Context) ---------------- */
import CourseNavigationBar from "./components/courseManagement/CourseNavigationBar";
import CourseDelete from "./components/courseManagement/CourseDelete";
import CourseDetail from "./components/courseManagement/CourseDetail";
import CourseList from "./components/courseManagement/CourseList";
import CourseRegistration from "./components/courseManagement/CourseRegistration";
import CourseUpdate from "./components/courseManagement/CourseUpdate";

/* ---------------- FACULTY MANAGEMENT (Context) ---------------- */
import FacultyNavigation from "./components/facultyManagment/FacultyNavigation";
import FacultyRegistration from "./components/facultyManagment/FacultyRegistration";
import FacultyList from "./components/facultyManagment/FacultyList";
import FacultyProfile from "./components/facultyManagment/FacultyProfile";
import FacultyUpdate from "./components/facultyManagment/FacultyUpdate";
import FacultyDelete from "./components/facultyManagment/FacuiltyDelete";

import { FacultyProvider } from "./components/facultyManagment/context/FacultyContext";
import { CourseProvider } from "./components/courseManagement/context/CourseContext";

function App() {
  return (
    <BrowserRouter>
      <CourseProvider>
        <FacultyProvider>
          {/* Always visible navbars */}
          <FacultyNavigation />
          <CourseNavigationBar />

          <Routes>
            {/* ---------------- FACULTY ROUTES ---------------- */}
            <Route path="/faculty/register" element={<FacultyRegistration />} />
            <Route path="/faculty/list" element={<FacultyList />} />
            <Route path="/faculty/profile" element={<FacultyProfile />} />
            <Route path="/faculty/update" element={<FacultyUpdate />} />
            <Route path="/faculty/delete" element={<FacultyDelete />} />

            {/* ---------------- COURSE ROUTES ---------------- */}
            <Route path="/course/register" element={<CourseRegistration />} />
            <Route path="/course/list" element={<CourseList />} />
            <Route path="/course/detail" element={<CourseDetail />} />
            <Route path="/course/delete" element={<CourseDelete />} />
            <Route path="/course/update" element={<CourseUpdate />} />
          </Routes>
        </FacultyProvider>
      </CourseProvider>
    </BrowserRouter>
  );
}

export default App;
