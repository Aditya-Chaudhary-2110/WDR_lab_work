import React, { createContext, useState, useEffect } from "react";

// Create Medicine Context
export const MedicineContext = createContext();

export const MedicineProvider = ({ children }) => {
  const [medicines, setMedicines] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [logs, setLogs] = useState([]);

  // Load dummy data or localStorage on mount
  useEffect(() => {
    const storedMeds = localStorage.getItem("medicines");
    const storedSchedules = localStorage.getItem("schedules");
    const storedLogs = localStorage.getItem("logs");

    if (storedMeds) setMedicines(JSON.parse(storedMeds));
    if (storedSchedules) setSchedules(JSON.parse(storedSchedules));
    if (storedLogs) setLogs(JSON.parse(storedLogs));
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("medicines", JSON.stringify(medicines));
    localStorage.setItem("schedules", JSON.stringify(schedules));
    localStorage.setItem("logs", JSON.stringify(logs));
  }, [medicines, schedules, logs]);

  // CRUD functions for Medicines
  const addMedicine = (medicine) => {
    setMedicines([...medicines, { id: Date.now(), ...medicine }]);
  };

  const updateMedicine = (id, updatedMedicine) => {
    setMedicines(
      medicines.map((med) =>
        med.id === id ? { ...med, ...updatedMedicine } : med
      )
    );
  };

  const deleteMedicine = (id) => {
    setMedicines(medicines.filter((med) => med.id !== id));
    setSchedules(schedules.filter((sch) => sch.medicineId !== id));
  };

  // CRUD for Schedule
  const addSchedule = (schedule) => {
    setSchedules([...schedules, { id: Date.now(), ...schedule }]);
  };

  const updateSchedule = (id, updatedSchedule) => {
    setSchedules(
      schedules.map((sch) =>
        sch.id === id ? { ...sch, ...updatedSchedule } : sch
      )
    );
  };

  const deleteSchedule = (id) => {
    setSchedules(schedules.filter((sch) => sch.id !== id));
  };

  // Add dosage log (Taken / Skipped / Missed)
  const addLog = (log) => {
    setLogs([...logs, { id: Date.now(), ...log }]);
  };

  return (
    <MedicineContext.Provider
      value={{
        medicines,
        schedules,
        logs,
        addMedicine,
        updateMedicine,
        deleteMedicine,
        addSchedule,
        updateSchedule,
        deleteSchedule,
        addLog,
      }}
    >
      {children}
    </MedicineContext.Provider>
  );
};
