const MenuSecondaryCard = (props) => {
  const { id, title, deal } = props;
  return (
    <article class='secondary-card' id={'card-' + id}>
      <h1 class='home-heading'>{title}</h1>
      <ul>
        {deal.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <p class='home-para'>Book table at our restaurant now!</p>
      <button>Get Now!</button>
    </article>
  );
};

export default MenuSecondaryCard;
