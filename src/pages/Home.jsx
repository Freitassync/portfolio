import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCode, FaChartBar, FaLaptopCode, FaDatabase } from 'react-icons/fa';

function Home() {
  const stats = [
    { icon: FaCode, value: '3+', label: 'Anos de Experiência' },
    { icon: FaLaptopCode, value: '15+', label: 'Projetos Concluídos' },
    { icon: FaChartBar, value: '10+', label: 'Dashboards Criados' },
    { icon: FaDatabase, value: '5+', label: 'Bancos de Dados' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.section
      className="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.div 
            className="greeting"
            variants={itemVariants}
          >
            Olá, eu sou
          </motion.div>
          
          <motion.h1 variants={itemVariants}>
            Gabriel Da Silva Freitas
          </motion.h1>
          
          <motion.p className="title" variants={itemVariants}>
            Desenvolvedor Front End & Analista de BI
          </motion.p>
          
          <motion.p className="subtitle" variants={itemVariants}>
            Transformo ideias em interfaces digitais modernas e dados em insights valiosos. 
            Especializado em React, JavaScript e análise de dados com Power BI.
          </motion.p>
          
          <motion.div className="cta-container" variants={itemVariants}>
            <Link to="/projetos" className="button">
              <FaCode />
              Ver Meus Projetos
            </Link>
            <Link to="/contato" className="button secondary">
              <FaChartBar />
              Vamos Conversar
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="stats-container"
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <stat.icon className="stat-icon" />
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="scroll-arrow"></div>
          <span>Role para baixo</span>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home;