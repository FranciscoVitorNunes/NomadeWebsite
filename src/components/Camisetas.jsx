import CategorySection from './CategorySection';


function Camisetas() {
  const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPMeWpcTr57Ki9EBtvb0H2wWjEfns_7WtcQw&s'
  const categories = ['HOMEN ARANHA', 'ANIME', 'FULTEBOL', 'CANTORES'];
  const products = {
    'HOMEN ARANHA': [
      { name: 'aranha1', image: img },
      { name: 'aranha2', image: img },
    ],
    'ANIME': [
      { name: 'anime1', image: img },
      { name: 'anime2', image: img },
    ],
    'FULTEBOL': [
      { name: 'futebol1', image: img },
      { name: 'futebol2', image: img },
    ],
    'CANTORES': [
      { name: 'button1', image:  img},
      { name: 'button2', image: img },
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

export default Camisetas