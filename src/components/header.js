import Navbar from './Navigation/navbar';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <header>
        <div>
          <Link to='/'>
            <img src={logo} alt='' id='main-logo' />
          </Link>
        </div>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
