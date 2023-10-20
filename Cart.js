import React from 'react';
import './Cart.css'; 
function Cart({ cart, addToCart }) {
  return (
    <div>
      <h2>Cart</h2>
      {cart.map((medicine, index) => (
        <div key={index} className="cart">
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
          <button onClick={() => addToCart(medicine)}>+</button>
          <button>Close</button>
          <button>Order</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
