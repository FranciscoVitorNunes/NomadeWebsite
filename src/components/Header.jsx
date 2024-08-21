import React from 'react';
 // Substitua pelo caminho correto da sua logo
import SimpleSlider from './SimpleSlider';

const Header = () => {
  return (
    <header style={styles.header}>
      
    <SimpleSlider />  
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  
};

export default Header;