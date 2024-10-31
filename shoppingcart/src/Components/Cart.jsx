import React, { useMemo } from 'react';
import './Cart.css';
import CartItems from './CartItems';

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div className="cart">
      <div className='shpcrt'>
      <h2>Shopping Cart</h2>
      </div><hr />
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <CartItems
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        ))
      )}
      <h3>Total: $ <span className='price'>{totalPrice.toFixed(2)}</span></h3>
    </div>
  );
}

export default Cart;
