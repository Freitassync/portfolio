import { motion } from 'framer-motion';
  import { FaReact, FaDatabase, FaLink, FaPaintBrush } from 'react-icons/fa';

  function Sobre() {
    return (
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Sobre Mim
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            Sou Gabriel Da Silva Freitas, um Desenvolvedor Front End e Analista de BI apaixonado por tecnologia e inovação. Combino criatividade e análise de dados para criar soluções digitais que impactam.
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            Minhas Habilidades
          </motion.h3>
          <motion.ul
            className="skills-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          >
            <li>
              <FaReact /> Desenvolvimento Front End (React, JavaScript, CSS)
            </li>
            <li>
              <FaDatabase /> Análise de Dados (Power BI, SQL, Python)
            </li>
            <li>
              <FaLink /> Integração de APIs e formulários dinâmicos
            </li>
            <li>
              <FaPaintBrush /> Design responsivo e UX/UI
            </li>
          </motion.ul>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: 'easeOut' }}
          >
            Conecte-se comigo no{' '}
            <a
              href="https://www.linkedin.com/in/freitasbtw"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{' '}
            ou explore meus projetos no{' '}
            <a
              href="https://github.com/Freitassync"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>.
          </motion.p>
        </div>
      </motion.section>
    );
  }

  export default Sobre;