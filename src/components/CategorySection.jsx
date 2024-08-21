import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const CategorySection = ({ category, products }) => {
  const { toggleItemInCart, isInCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  const handleBuyClick = (product) => {
    const quantity = quantities[product.name] || 1;
    toggleItemInCart(product, quantity);
  };

  const handleQuantityChange = (product, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.name]: quantity,
    }));
  };

  return (
    <section id={category} style={styles.section}>
      <h2 style={styles.titulo}>{category}</h2>
      <div style={styles.productGrid}>
        {products.map((product, index) => (
          <div key={index} style={{ ...styles.product, ...(isInCart(product) ? styles.inCart : {}) }}>
            {isInCart(product) && <div style={styles.overlay}></div>}
            <img src={product.image} alt={product.name} style={styles.productImage} />
            
            <input
              type="number"
              min="1"
              value={quantities[product.name] || 1}
              onChange={(e) => handleQuantityChange(product, parseInt(e.target.value))}
              style={styles.quantityInput}
            />
            
            <button
              style={{ ...styles.buyButton, ...(isInCart(product) ? styles.removeButton : {}) }}
              onClick={() => handleBuyClick(product)}
            >
              {isInCart(product) ? '-Remover-' : '+Adicionar ao Carrinho+'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '20px',
    borderBottom: '1px solid #ccc',
  },
  productGrid: {
    display: 'flex',
    gap: '20px',
  },
  product: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
    position: 'relative',
  },
  productImage: {
    maxWidth: '100%',
    height: 'auto',
  },
  buyButton: {
    marginTop: '10px',
    padding: '5px 10px',
    width: '90%',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  removeButton: {
    backgroundColor: '#dc3545', // Cor vermelha para o botão "Remover"
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    pointerEvents: 'none',
  },
  titulo: {
    textAlign: 'center',
  },
  quantityInput: {
    marginTop: '10px',
    padding: '5px',
    width: '50%',
  },
};

export default CategorySection;