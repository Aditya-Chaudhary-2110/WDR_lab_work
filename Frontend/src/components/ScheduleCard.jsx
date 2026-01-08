import React, { useContext } from "react";
import { MedicineContext } from "../context/MedicineContext";

const ScheduleCard = ({ schedule }) => {
  const { medicines, addLog } = useContext(MedicineContext);

  const medicine = medicines.find((med) => med.id === schedule.medicineId);

  const handleAction = (status) => {
    addLog({
      medicineId: schedule.medicineId,
      medicineName: medicine?.name || "Unknown",
      time: schedule.time,
      status,
      date: new Date().toISOString(),
    });
    alert(`Marked as ${status}`);
  };

  if (!medicine) return null; // Safety check

  return (
    <div className="schedule-card">
      <h4>{medicine.name}</h4>
      <p>Time: {schedule.time}</p>
      {schedule.notes && <p>Notes: {schedule.notes}</p>}
      <div className="schedule-buttons">
        <button onClick={() => handleAction("Taken")}>Taken</button>
        <button onClick={() => handleAction("Skipped")}>Skipped</button>
        <button onClick={() => handleAction("Missed")}>Missed</button>
      </div>
    </div>
  );
};

export default ScheduleCard;
