import MenuPrimaryCard from './homeCards/menuPrimaryCard';
import MenuSecondaryCard from './homeCards/menuSecondaryCard';
import './home.css';
const Main = () => {
  const deals = [
    {
      id: 1,
      title: 'Deal 1',
      deal: [
        'Grilled Salmon with Lemon Butter Sauce',
        'Fettuccine Alfredo with Grilled Chicken',
        'Spicy Shrimp Tacos with Avocado Salsa',
        'Chocolate Lava Cake with Vanilla Ice Cream',
      ],
    },
    {
      id: 2,
      title: 'Deal 2',
      deal: [
        'Grilled Salmon with Lemon Butter Sauce',
        'Fettuccine Alfredo with Grilled Chicken',
        'Spicy Shrimp Tacos with Avocado Salsa',
        'Chocolate Lava Cake with Vanilla Ice Cream',
      ],
    },
  ];
  return (
    <main style={{ color: '#eee' }}>
      <MenuPrimaryCard />
      <h1>Our Deals</h1>
      <section class='card-section'>
        {deals.map((deal) => (
          <MenuSecondaryCard id={deal.id} title={deal.title} deal={deal.deal} />
        ))}
      </section>
    </main>
  );
};

export default Main;
