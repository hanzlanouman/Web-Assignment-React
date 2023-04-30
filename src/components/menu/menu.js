import MenuCard from './menuCard';
import '../../menu.css';
// import all images from assets folder
import food1 from '../../assets/food-1.jpg';
import food2 from '../../assets/food-2.jpg';
import food3 from '../../assets/food-3.jpg';
import food4 from '../../assets/food-4.jpg';
import food5 from '../../assets/food-5.jpg';
import food6 from '../../assets/food-6.jpg';
const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Fish and Chips',
      img: food1,
      description: 'Lorem ipsum dolor sit amet.',
      price: 4.99,
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      img: food2,
      description: 'Lorem ipsum dolor sit amet.',
      price: 4.99,
    },
    {
      id: 3,
      name: 'Lasagna',
      img: food3,
      description: 'Lorem ipsum dolor sit amet.',
      price: 4.99,
    },
    {
      id: 4,
      name: 'Chicken Curry',
      img: food4,
      description: 'Lorem ipsum dolor sit amet.',
      price: 4.99,
    },
    {
      id: 5,
      name: 'Sushi',
      img: food5,
      description: 'Lorem ipsum dolor sit amet.',
      price: 4.99,
    },

    {
      id: 6,
      name: 'Pizza',
      img: food6,
      description: 'Lorem ipsum dolor sit amet.',
      price: 4.99,
    },
  ];
  return (
    <main>
      <h1>Our Menu</h1>
      <section class='menu-card-section'>
        {menuItems.map((menuItem) => (
          <MenuCard menuItem={menuItem} />
        ))}
      </section>
    </main>
  );
};

export default Menu;
