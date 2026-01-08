import React, { useContext, useState } from "react";
import { MedicineContext } from "../context/MedicineContext";
import MedicineForm from "./MedicineForm";

const MedicineList = () => {
  const { medicines, deleteMedicine } = useContext(MedicineContext);
  const [editingMedicine, setEditingMedicine] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (medicine) => {
    setEditingMedicine(medicine);
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditingMedicine(null);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setEditingMedicine(null);
    setShowForm(false);
  };

  return (
    <div className="medicine-list-container">
      <div className="medicine-header">
        <h2>Medicines</h2>
        <button onClick={handleAdd}>Add Medicine</button>
      </div>

      <table className="medicine-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Stock Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {medicines.length === 0 && (
            <tr>
              <td colSpan="4">No medicines added yet.</td>
            </tr>
          )}
          {medicines.map((med) => (
            <tr key={med.id}>
              <td>{med.name}</td>
              <td>{med.quantity}</td>
              <td className={med.quantity <= 5 ? "low-stock" : ""}>
                {med.quantity <= 5 ? "Low Stock" : "Sufficient"}
              </td>
              <td>
                <button onClick={() => handleEdit(med)}>Edit</button>
                <button onClick={() => deleteMedicine(med.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <MedicineForm medicine={editingMedicine} onClose={handleCloseForm} />
      )}
    </div>
  );
};

export default MedicineList;
