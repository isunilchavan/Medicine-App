import React from 'react';
import './AddMedicine.css'; // Import the CSS file

function AddMedicine({ 
  medicineName, 
  description, 
  price, 
  quantity, 
  setMedicineName, 
  setDescription, 
  setPrice, 
  setQuantity, 
  addMedicine 
}) {
  return (
    <div className="add-medicine">
      <h2>Add Medicine</h2>
      <input
        type="text"
        placeholder="Medicine Name"
        value={medicineName}
        onChange={(e) => setMedicineName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={addMedicine}>Add Product</button>
    </div>
  );
}

export default AddMedicine;
