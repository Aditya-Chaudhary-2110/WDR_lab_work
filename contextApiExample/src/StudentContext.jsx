import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);

  const addStudent = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
  };

  return (
    <StudentContext.Provider value={{ students, addStudent }}>
      {children}
    </StudentContext.Provider>
  );
}
