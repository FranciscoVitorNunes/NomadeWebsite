import CategorySection from './CategorySection';


function Buttons() {
  const img = 'https://static.wixstatic.com/media/f08c17_34e7c9bc843743de8fdc275e94038982.jpg/v1/fill/w_600,h_600,al_c,lg_1,q_80,enc_auto/f08c17_34e7c9bc843743de8fdc275e94038982.jpg'
  const categories = ['HOMEN ARANHA', 'ANIME', 'FULTEBOL', 'CANTORES'];
  const products = {
    'HOMEN ARANHA': [
      { name: 'Button Homem Aranha 1', image: img },
      { name: 'Button Homem Aranha 2', image: img },
    ],
    'ANIME': [
      { name: 'Button Anime 1', image: img },
      { name: 'Button Anime 2', image: img },
    ],
    'FULTEBOL': [
      { name: 'Button Futebol 1', image: img },
      { name: 'Button Futebol 2', image: img },
    ],
    'CANTORES': [
      { name: 'Button ale 1', image:  img},
      { name: 'Button ale 2', image: img },
    ],
  };
  return(
       <>
        {categories.map(category => (
       <CategorySection key={category} category={category} products={products[category]} />
    ))}
     </>
  )
};

export default Buttons