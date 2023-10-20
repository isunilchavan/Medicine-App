import React, { useState } from 'react';
import MedicineList from './components/MedicineList';
import Cart from './components/Cart';
import AddMedicine from './components/AddMedicine';
import'./App.css';

function App() {
  const [medicineName, setMedicineName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  const addMedicine = () => {
    const newMedicine = {
      medicineName,
      description,
      price,
      quantity,
    };
    setMedicines([...medicines, newMedicine]);
    setMedicineName('');
    setDescription('');
    setPrice('');
    setQuantity('');
  };

  const addToCart = (medicine) => {
    const existingMedicine = cart.find((item) => item.medicineName === medicine.medicineName);

    if (existingMedicine) {
      const updatedCart = cart.map((item) =>
        item.medicineName === medicine.medicineName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...medicine, quantity: 1 }]);
    }

    const updatedMedicines = medicines.map((m) =>
      m.medicineName === medicine.medicineName
        ? { ...m, quantity: m.quantity - 1 }
        : m
    );
    setMedicines(updatedMedicines);
  };

  const handleSearch = () => {
    const foundMedicine = medicines.find(
      (medicine) => medicine.medicineName === searchTerm
    );
    if (foundMedicine) {
      addToCart(foundMedicine);
      setSearchTerm('');
    } else {
      alert('Out of Stock');
    }
  };

  return (
    <div className="App">
      <h1>MedPlus</h1>
      <AddMedicine
        medicineName={medicineName}
        description={description}
        price={price}
        quantity={quantity}
        setMedicineName={setMedicineName}
        setDescription={setDescription}
        setPrice={setPrice}
        setQuantity={setQuantity}
        addMedicine={addMedicine}
      />

      <div>
        <h2>Search Medicine</h2>
        <input
          type="text"
          placeholder="Search Medicine"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <MedicineList medicines={medicines} />
      <Cart cart={cart} addToCart={addToCart} />
    </div>
  );
}

export default App;
