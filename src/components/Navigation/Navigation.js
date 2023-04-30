import { Outlet } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import './App.css';
const Navigation = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Navigation;
