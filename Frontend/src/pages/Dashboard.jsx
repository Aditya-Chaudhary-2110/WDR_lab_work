import React, { useContext } from "react";
import { MedicineContext } from "../context/MedicineContext";
import MedicineList from "../components/MedicineList";
import ScheduleCard from "../components/ScheduleCard";

const Dashboard = () => {
  const { medicines, schedules } = useContext(MedicineContext);

  // Filter low stock medicines
  const lowStockMeds = medicines.filter((med) => med.quantity <= 5);

  // Filter schedules for today
  const today = new Date().toISOString().split("T")[0];
  const todaySchedules = schedules.filter(
    (sch) => sch.date === today || !sch.date // optional: if schedules have date
  );

  return (
    <div className="dashboard-container">
      <div className="low-stock-panel">
        <h3>Low Stock Overview</h3>
        {lowStockMeds.length === 0 ? (
          <p>All medicines are sufficiently stocked.</p>
        ) : (
          <ul>
            {lowStockMeds.map((med) => (
              <li key={med.id}>
                {med.name} - {med.quantity} left
              </li>
            ))}
          </ul>
        )}
      </div>

      <MedicineList />

      <div className="schedule-panel">
        <h3>Today's Schedule</h3>
        {todaySchedules.length === 0 ? (
          <p>No doses scheduled for today.</p>
        ) : (
          todaySchedules.map((sch) => (
            <ScheduleCard key={sch.id} schedule={sch} />
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
