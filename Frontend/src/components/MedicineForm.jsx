import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MedicineContext } from "../context/MedicineContext";

const MedicineForm = ({ medicine, onClose }) => {
  const { addMedicine, updateMedicine } = useContext(MedicineContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (medicine) {
      reset(medicine); // Prefill form if editing
    }
  }, [medicine, reset]);

  const onSubmit = (data) => {
    if (medicine) {
      updateMedicine(medicine.id, data);
    } else {
      addMedicine(data);
    }
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{medicine ? "Edit Medicine" : "Add Medicine"}</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="medicine-form">
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && <span className="error">Name is required</span>}

          <input
            type="text"
            placeholder="Type"
            {...register("type", { required: true })}
          />
          {errors.type && <span className="error">Type is required</span>}

          <input
            type="number"
            placeholder="Quantity"
            {...register("quantity", { required: true, min: 0 })}
          />
          {errors.quantity && (
            <span className="error">Quantity must be at least 0</span>
          )}

          <textarea
            placeholder="Description (optional)"
            {...register("description")}
          />

          <div className="form-buttons">
            <button type="submit">{medicine ? "Update" : "Add"}</button>
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MedicineForm;
