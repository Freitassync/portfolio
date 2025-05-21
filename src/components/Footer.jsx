import { FaLinkedin, FaGithub } from 'react-icons/fa';

  function Footer() {
    return (
      <footer>
        <p>© 2025 Gabriel Da Silva Freitas. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/freitasbtw" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Freitassync" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </footer>
    );
  }

  export default Footer;