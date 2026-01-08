import React, { useContext, useState } from "react";
import { MedicineContext } from "../context/MedicineContext";

const ScheduleLog = () => {
  const { logs, medicines } = useContext(MedicineContext);
  const [filterMedicineId, setFilterMedicineId] = useState("");

  const filteredLogs = filterMedicineId
    ? logs.filter((log) => log.medicineId === filterMedicineId)
    : logs;

  return (
    <div className="log-page">
      <h2>Dosage Logs</h2>

      <div className="filter-section">
        <label>Filter by Medicine:</label>
        <select
          value={filterMedicineId}
          onChange={(e) => setFilterMedicineId(e.target.value)}
        >
          <option value="">All Medicines</option>
          {medicines.map((med) => (
            <option key={med.id} value={med.id}>
              {med.name}
            </option>
          ))}
        </select>
      </div>

      {filteredLogs.length === 0 ? (
        <p>No logs available.</p>
      ) : (
        <table className="log-table">
          <thead>
            <tr>
              <th>Medicine</th>
              <th>Time</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.map((log) => (
              <tr key={log.id}>
                <td>{log.medicineName}</td>
                <td>{log.time}</td>
                <td>{log.status}</td>
                <td>{new Date(log.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ScheduleLog;
