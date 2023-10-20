import React from 'react';
import './MedicineList.css'; 

function MedicineList({ medicines }) {
  return (
    <div>
      <h2>Medicine List</h2>
      {medicines.map((medicine, index) => (
        <div key={index} className="med-list">
          <label>
            <strong>Name: </strong>
            <span>{medicine.medicineName}</span>
          </label>
          <br />
          <label>
            <strong>Description: </strong>
            <span>{medicine.description}</span>
          </label>
          <br />
          <label>
            <strong>Price: </strong>
            <span>{medicine.price}</span>
          </label>
          <br />
          <label>
            <strong>Quantity: </strong>
            <span>{medicine.quantity}</span>
          </label>
          <br />
        </div>
      ))}
    </div>
  );
}

export default MedicineList;
