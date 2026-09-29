import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1 className="header__title">🔴 Pokédex</h1>
    <nav className="header__nav">
      <Link to="/">Inicio</Link>
      <Link to="/favoritos">Favoritos</Link>
    </nav>
  </header>
);

export default Header;
