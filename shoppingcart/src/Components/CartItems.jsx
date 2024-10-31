import React from 'react';
import './CartItems.css';

function CartItems({ item, removeFromCart, updateQuantity }) {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>${item.price}</p>
      <input
        type="number"
        value={item.quantity}
        min="1"
        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
      />
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
}

export default CartItems;
