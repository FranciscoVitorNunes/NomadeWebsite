import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  const handleBuyAllClick = () => {
    const phoneNumber = '5581987654321'; // Substitua pelo número de telefone da sua empresa
    let message = 'Olá, gostaria de comprar os seguintes produtos:';
    cartItems.forEach((item) => {
      message += `\n- ${item.name} (Quantidade: ${item.quantity})`;
    });
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    clearCart(); // Limpa o carrinho após comprar todos os produtos
  };

  const discount = cartItems.length % 3 === 0 ? (cartItems.length / 3) * 0.5 : 0;
  const totalPrice = cartItems.reduce((total, item) => total + (item.quantity * 3.5), 0);
  const discountedPrice = totalPrice - discount;

  return (
    <div style={styles.cart}>
      <h2>Carrinho ({cartItems.length})</h2>
      <h2>
        Preço: 
        {discount > 0 ? (
          <>
            <s>R$ {totalPrice.toFixed(2)}</s> <br />
            <span>R$ {discountedPrice.toFixed(2)}</span>
          </>
        ) : (
          <span>R$ {totalPrice.toFixed(2)}</span>
        )}
      </h2>
      <ul style={styles.ulist}>
        {cartItems.map((item, index) => (
          <li key={index} style={styles.list}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <div>{item.name} (Quantidade: {item.quantity})</div>
          </li>
        ))}
      </ul>
      {discount > 0 && (
        <p style={styles.discount}>Desconto aplicado: R$ {discount.toFixed(2)}</p>
      )}
      {cartItems.length > 0 && (
        <button style={styles.buyAllButton} onClick={handleBuyAllClick}>Comprar Todos</button>
      )}
    </div>
  );
};

const styles = {
  cart: {
    padding: '20px',
    position: 'fixed',
    top: '10px',
    right: '10px',
    maxWidth: '220px',
    backgroundColor: '#f8f9fa',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  buyAllButton: {
    marginTop: '10px',
    padding: '5px',
    backgroundColor: '#007bff', // Cor azul para o botão "Comprar Todos"
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  image: {
    width: '60px',
  },
  list: {
    marginLeft: '-10px',
    listStyle: 'none',
    display: 'inline-block',
  },
  ulist: {
    marginLeft: '-20px',
    maxWidth: '200px',
  },
};

export default Cart;