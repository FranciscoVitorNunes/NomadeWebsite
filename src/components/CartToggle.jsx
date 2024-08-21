import React, { useState } from 'react';
import Cart from './Cart';

const CartToggle = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div style={styles.cartToggle}>
      <button style={styles.toggleButton} onClick={toggleCart}>
        {cartVisible ? 'Fechar Carrinho' : 'Abrir Carrinho'}
      </button>
      {cartVisible && <Cart />}
    </div>
  );
};

const styles = {
  cartToggle: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '1000', // Garante que o botão esteja acima de outros elementos
  },
  toggleButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CartToggle;