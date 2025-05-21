import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container">
        <h1>Gabriel Freitas</h1>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Home
              </motion.span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Sobre
              </motion.span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projetos"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Projetos
              </motion.span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contato"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Contato
              </motion.span>
            </NavLink>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;