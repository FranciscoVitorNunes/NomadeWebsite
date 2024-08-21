import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import CategoryMenu from './components/CategoryMenu';
import CategorySection from './components/CategorySection';
import CartProvider from './context/CartContext';
import CartToggle from './components/CartToggle';
import Buttons from "./components/Buttons.jsx";
import Camisetas from "./components/Camisetas.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer"
const App = () => {
  const categories = ['personalizados', 'buttons', 'camisetas'];
  return (
  <Router>
    <CartProvider>https://github.com/FranciscoVitorNunes/jogo_da_velha.git
      <div>
        <Header />
        <ul style={styles.menuu}>
 
         <li style={styles.menuItem}>
           <Link to="/"> BUTTONS </Link>
         </li>
         <li style={styles.menuItem}>
           <Link to="/camisetas"> CAMISETAS </Link>
         </li>
       </ul>

          
        <Routes>
          <Route path="/" element={<Buttons />} />
          <Route path="/camisetas" element={<Camisetas />} />
        </Routes>
    
    
        
    <CartToggle />
      </div>
    </CartProvider>
  <Footer />
    </Router>
  );
};
const styles = {
  menuu: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '10px',
    backgroundColor: '#e9ecef',
  },
  menuItem: {
    listStyle: 'none',
    textDecoration: 'none',
    color: '#007bff',
  },
};

export default App;