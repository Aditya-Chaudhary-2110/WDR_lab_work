import { createContext, useContext, useState } from "react";

const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);

  const addCourse = (course) => {
    setCourses((prev) => [...prev, course]);
  };

  const deleteCourse = (id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  };

  const updateCourse = (updatedCourse) => {
    setCourses((prev) =>
      prev.map((c) => (c.id === updatedCourse.id ? updatedCourse : c))
    );
  };

  return (
    <CourseContext.Provider
      value={{ courses, addCourse, deleteCourse, updateCourse }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  return useContext(CourseContext);
}
