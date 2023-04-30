import { Link } from 'react-router-dom';

const MenuPrimaryCard = () => {
  return (
    <div class='primary-card'>
      <Link to='/book-table'>
        <h1 class='home-heading'>Avail 50% off on Deserts</h1>
        <p class='home-para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corporis
          provident consectetur porro enim sit reiciendis nulla exercitationem
          nesciunt tempora?
        </p>
      </Link>
    </div>
  );
};

export default MenuPrimaryCard;
