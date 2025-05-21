import { motion } from 'framer-motion';
  import Mindfit from '../assets/Mindfit.png';
  import Portfolio from '../assets/Portfolio.png';

  function Projetos() {
    const projetos = [
      {
        id: 1,
        nome: 'Portfólio Pessoal',
        descricao: 'Um portfólio web moderno construído com React e CSS puro.',
        link: 'https://github.com/Freitassync/portfolio',
        imagem: Portfolio,
      },
      {
        id: 2,
        nome: 'Mindfit',
        descricao: 'App fitness construído com Kotlin',
        link: 'https://github.com/Freitassync/Mindfit',
        imagem: Mindfit,
      },
    ];

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
            Meus Projetos
          </motion.h2>
          <motion.div
            className="project-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            {projetos.map((projeto) => (
              <motion.div
                key={projeto.id}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + projeto.id * 0.2,
                  ease: 'easeOut',
                }}
              >
                <img src={projeto.imagem} alt={projeto.nome} />
                <h3>{projeto.nome}</h3>
                <p>{projeto.descricao}</p>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Ver Projeto
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    );
  }

  export default Projetos;