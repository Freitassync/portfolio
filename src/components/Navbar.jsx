import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="container">
        <h1>Gabriel Da Silva Freitas</h1>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/sobre" className={({ isActive }) => isActive ? "active" : ""}>Sobre</NavLink>
          </li>
          <li>
            <NavLink to="/projetos" className={({ isActive }) => isActive ? "active" : ""}>Projetos</NavLink>
          </li>
          <li>
            <NavLink to="/contato" className={({ isActive }) => isActive ? "active" : ""}>Contato</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;