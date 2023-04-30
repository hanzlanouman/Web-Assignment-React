import footerLogo from '../assets/bottom-logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div class='bottom-logo'>
        <Link to='/'>
          <img src={footerLogo} alt='logo' />
        </Link>
      </div>
      <div class='copyright'>
        <hr />
        <p>Copyright Little Lemon</p>
      </div>
    </footer>
  );
};

export default Footer;
