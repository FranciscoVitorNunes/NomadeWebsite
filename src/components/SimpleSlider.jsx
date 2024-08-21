import React, { useState, useEffect } from 'react';


const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png'
const SimpleSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { src: 'https://img.elo7.com.br/product/zoom/1A8AD4F/bottons-dragon-ball.jpg', alt: 'Slide 1' },
    { src: 'https://shop.darcsport.com/cdn/shop/files/11_130fea39-79b1-499d-9f8f-284a9c24db95.jpg?v=1716403584&width=1080', alt: 'Slide 2' },
    { src: 'https://down-br.img.susercontent.com/file/08ca961b85ce8ef8ed584f5d94cdee51_tn', alt: 'Slide 3' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div style={styles.sliderContainer}>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            ...styles.slide,
            opacity: index === currentSlide ? 1 : 0,
            zIndex: index === currentSlide ? 1 : 0,
          }}
        >
          <img src={logo} alt="Logo" style={styles.logo} />

          <img src={slide.src} alt={slide.alt} style={styles.slideImage} />
        </div>
      ))}
    </div>
  );
};

const styles = {
  sliderContainer: {
    width: '100%',
    height: '40vh',
    position: 'relative',
    overflow: 'hidden',
    // Adiciona margem e padding para telas menores
    padding: '0 10px',
    boxSizing: 'border-box',
  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'opacity 1s ease-in-out',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  logo: {
    maxWidth: '50px',
    margin: '10px 5px',
    display: 'inline-block',
    position: 'absolute',
    // Posicionamento do logo pode precisar de ajustes
    top: '10px',
    left: '10px',
  },
  // Media Queries para diferentes tamanhos de tela
  '@media (max-width: 768px)': {
    sliderContainer: {
      height: '40vh',
    },
    logo: {
      maxWidth: '40px',
      margin: '5px 3px',
      top: '5px',
      left: '5px',
    },
  },
  '@media (max-width: 480px)': {
    sliderContainer: {
      height: '20vh',
    },
    logo: {
      maxWidth: '30px',
      margin: '3px 2px',
      top: '3px',
      left: '3px',
    },
  },

  
  
};

export default SimpleSlider;