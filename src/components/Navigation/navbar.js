import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul id='menu'>
        <li class='menu-item'>
          <Link to='/'>Home</Link>
        </li>
        <li class='menu-item'>
          <Link to='/menu'>Menu</Link>
        </li>
        <li class='menu-item'>
          <Link to='/book-table'>Book Table</Link>
        </li>
        <li class='menu-item'>
          <Link to='/about-us'>About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
<div></div>;
