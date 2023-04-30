import Home from './components/home';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/menu/menu';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/about';
import BookTableForm from './components/BookTable/bookTableForm';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='menu' element={<Menu />} />
          <Route path='about-us' element={<About />} />
          <Route path='book-table' element={<BookTableForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
