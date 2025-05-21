import { motion } from 'framer-motion';

  function Home() {
    return (
      <motion.section
        className="home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            Gabriel Da Silva Freitas
          </motion.h1>
          <motion.p
            className="title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            Desenvolvedor Front End & Analista de BI
          </motion.p>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            Construindo interfaces modernas e transformando dados em soluções impactantes.
          </motion.p>
          <motion.div
            className="cta-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          >
            <a href="/projetos" className="button">
              Meus Projetos
            </a>
            <a href="/contato" className="button secondary">
              Entre em Contato
            </a>
          </motion.div>
        </div>
      </motion.section>
    );
  }

  export default Home;