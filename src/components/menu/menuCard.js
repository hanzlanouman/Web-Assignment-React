const MenuCard = (props) => {
  const { name, img, description, price } = props.menuItem;

  return (
    <article class='menu-card'>
      <div id='menu-img-1' class='menu-img'>
        <img src={img} alt='menu-img' />
      </div>
      <h1 >{name}</h1>
      <ul>
        <li>Dish A</li>
        <li>Dish B</li>
        <li>Dish C</li>
        <li>Dessert A</li>
      </ul>
      <p>{description}</p>
      <button>Buy {price}</button>
    </article>
  );
};

export default MenuCard;
