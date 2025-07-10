import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaCode, FaChartBar } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Links Rápidos',
      links: [
        { name: 'Sobre', href: '/sobre' },
        { name: 'Projetos', href: '/projetos' },
        { name: 'Contato', href: '/contato' }
      ]
    },
    {
      title: 'Serviços',
      links: [
        { name: 'Desenvolvimento Web', href: '#' },
        { name: 'Análise de Dados', href: '#' },
        { name: 'Consultoria BI', href: '#' }
      ]
    },
    {
      title: 'Contato',
      links: [
        { name: 'gabriel@exemplo.com', href: 'mailto:gabriel@exemplo.com', icon: FaEnvelope },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/freitasbtw', icon: FaLinkedin },
        { name: 'GitHub', href: 'https://github.com/Freitassync', icon: FaGithub }
      ]
    }
  ];

  const skills = [
    { icon: FaCode, name: 'Frontend' },
    { icon: FaChartBar, name: 'BI & Analytics' }
  ];

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-grid">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Gabriel Freitas</h3>
            <p>
              Desenvolvedor Front End & Analista de BI apaixonado por criar 
              experiências digitais excepcionais e transformar dados em insights.
            </p>
            <div className="footer-skills">
              {skills.map((skill, index) => (
                <div key={index} className="skill-badge">
                  <skill.icon />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div 
              key={index}
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      {link.icon && <link.icon />}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="footer-divider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        />

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="footer-copyright">
            <p>
              © {currentYear} Gabriel Da Silva Freitas. Todos os direitos reservados.
            </p>
            <p className="footer-made-with">
              Feito com <FaHeart className="heart-icon" /> e muito código
            </p>
          </div>

          <div className="footer-social">
            <a 
              href="https://www.linkedin.com/in/freitasbtw" 
              target="_blank" 
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/Freitassync" 
              target="_blank" 
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="mailto:gabriel@exemplo.com"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;