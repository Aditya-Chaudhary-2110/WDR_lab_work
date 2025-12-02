import { createContext, useContext, useState } from "react";

export const FacultyContext = createContext();

export function FacultyProvider({ children }) {
  const [facultyData, setFacultyData] = useState([]);

  const addFaculty = (faculty) => {
    setFacultyData((prev) => [...prev, faculty]);
  };

  const deleteFaculty = (id) => {
    setFacultyData((prev) => prev.filter((f) => f.id.toString() !== id));
  };

  const selectFaculty = (id) => {
    return facultyData.find((f) => f.id.toString() === id) || null;
  };

  return (
    <FacultyContext.Provider
      value={{
        facultyData,
        addFaculty,
        deleteFaculty,
        selectFaculty,
      }}
    >
      {children}
    </FacultyContext.Provider>
  );
}

export const useFaculty = () => useContext(FacultyContext);
