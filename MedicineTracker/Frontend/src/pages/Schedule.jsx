import React, { useContext, useState } from "react";
import { MedicineContext } from "../context/MedicineContext";

const Schedule = () => {
  const { medicines, schedules, addSchedule, deleteSchedule } =
    useContext(MedicineContext);

  const [formData, setFormData] = useState({
    medicineId: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.medicineId || !formData.time) {
      alert("Please select medicine and time");
      return;
    }
    addSchedule({ ...formData });
    setFormData({ medicineId: "", time: "", notes: "" });
  };

  return (
    <div className="schedule-page">
      <h2>Manage Schedules</h2>

      <form onSubmit={handleSubmit} className="schedule-form">
        <select
          name="medicineId"
          value={formData.medicineId}
          onChange={handleChange}
        >
          <option value="">Select Medicine</option>
          {medicines.map((med) => (
            <option key={med.id} value={med.id}>
              {med.name}
            </option>
          ))}
        </select>

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />

        <input
          type="text"
          name="notes"
          placeholder="Notes (optional)"
          value={formData.notes}
          onChange={handleChange}
        />

        <button type="submit">Add Schedule</button>
      </form>

      <h3>Existing Schedules</h3>
      {schedules.length === 0 ? (
        <p>No schedules yet.</p>
      ) : (
        <ul className="schedule-list">
          {schedules.map((sch) => {
            const medicine = medicines.find((med) => med.id === sch.medicineId);
            return (
              <li key={sch.id}>
                {medicine?.name || "Unknown"} at {sch.time}{" "}
                {sch.notes && `- ${sch.notes}`}
                <button onClick={() => deleteSchedule(sch.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Schedule;
