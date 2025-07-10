import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs, FaPython, FaDatabase, FaCode, FaFilter } from 'react-icons/fa';
import { SiPowerbi, SiTypescript, SiTailwindcss, SiKotlin, SiFramer } from 'react-icons/si';
import Mindfit from '../assets/Mindfit.png';
import Portfolio from '../assets/Portfolio.png';

function Projetos() {
  const [filtroAtivo, setFiltroAtivo] = useState('todos');

  const projetos = [
    {
      id: 1,
      nome: 'Portfólio Pessoal',
      descricao: 'Um portfólio web moderno e responsivo construído com React, apresentando animações fluidas com Framer Motion e design profissional.',
      link: 'https://github.com/Freitassync/portfolio',
      demo: 'https://freitassync.github.io/portfolio',
      imagem: Portfolio,
      categoria: 'frontend',
      tecnologias: ['React', 'JavaScript', 'CSS3', 'Framer Motion'],
      destaque: true
    },
    {
      id: 2,
      nome: 'Mindfit',
      descricao: 'Aplicativo mobile de fitness desenvolvido em Kotlin, focado em treinos personalizados e acompanhamento de progresso do usuário.',
      link: 'https://github.com/Freitassync/Mindfit',
      imagem: Mindfit,
      categoria: 'mobile',
      tecnologias: ['Kotlin', 'Android', 'SQLite', 'Material Design'],
      destaque: false
    },
    {
      id: 3,
      nome: 'Dashboard Analítico BI',
      descricao: 'Dashboard interativo desenvolvido em Power BI para análise de vendas e performance, com métricas em tempo real e visualizações avançadas.',
      link: 'https://github.com/Freitassync/dashboard-bi',
      imagem: '/api/placeholder/400/250',
      categoria: 'analytics',
      tecnologias: ['Power BI', 'SQL', 'Python', 'DAX'],
      destaque: true
    },
    {
      id: 4,
      nome: 'E-commerce React',
      descricao: 'Plataforma de e-commerce completa com carrinho de compras, autenticação de usuários e integração com APIs de pagamento.',
      link: 'https://github.com/Freitassync/ecommerce-react',
      demo: 'https://ecommerce-demo.vercel.app',
      imagem: '/api/placeholder/400/250',
      categoria: 'frontend',
      tecnologias: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      destaque: false
    },
    {
      id: 5,
      nome: 'API RESTful Python',
      descricao: 'API robusta desenvolvida em Python/Flask para gerenciamento de dados, com documentação completa e testes automatizados.',
      link: 'https://github.com/Freitassync/api-python',
      imagem: '/api/placeholder/400/250',
      categoria: 'backend',
      tecnologias: ['Python', 'Flask', 'PostgreSQL', 'Docker'],
      destaque: false
    },
    {
      id: 6,
      nome: 'Sistema de Análise de Dados',
      descricao: 'Sistema completo para análise e visualização de grandes volumes de dados, com machine learning para insights preditivos.',
      link: 'https://github.com/Freitassync/data-analysis',
      imagem: '/api/placeholder/400/250',
      categoria: 'analytics',
      tecnologias: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
      destaque: true
    }
  ];

  const categorias = [
    { id: 'todos', nome: 'Todos', icon: FaCode },
    { id: 'frontend', nome: 'Frontend', icon: FaReact },
    { id: 'backend', nome: 'Backend', icon: FaDatabase },
    { id: 'mobile', nome: 'Mobile', icon: FaJs },
    { id: 'analytics', nome: 'Analytics', icon: SiPowerbi }
  ];

  const projetosFiltrados = filtroAtivo === 'todos' 
    ? projetos 
    : projetos.filter(projeto => projeto.categoria === filtroAtivo);

  const getTechIcon = (tech) => {
    const icons = {
      'React': FaReact,
      'JavaScript': FaJs,
      'TypeScript': SiTypescript,
      'Python': FaPython,
      'Kotlin': SiKotlin,
      'Power BI': SiPowerbi,
      'Tailwind CSS': SiTailwindcss,
      'Framer Motion': SiFramer
    };
    return icons[tech] || FaCode;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2 variants={itemVariants}>
          Meus Projetos
        </motion.h2>
        
        <motion.p className="projects-intro" variants={itemVariants}>
          Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades 
          em diferentes tecnologias e áreas de expertise.
        </motion.p>

        <motion.div className="filter-container" variants={itemVariants}>
          <FaFilter className="filter-icon" />
          <div className="filter-buttons">
            {categorias.map((categoria) => (
              <motion.button
                key={categoria.id}
                className={`filter-btn ${filtroAtivo === categoria.id ? 'active' : ''}`}
                onClick={() => setFiltroAtivo(categoria.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <categoria.icon />
                {categoria.nome}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div className="projects-stats" variants={itemVariants}>
          <div className="stat">
            <span className="stat-number">{projetos.length}</span>
            <span className="stat-label">Projetos Total</span>
          </div>
          <div className="stat">
            <span className="stat-number">{projetos.filter(p => p.destaque).length}</span>
            <span className="stat-label">Projetos Destaque</span>
          </div>
          <div className="stat">
            <span className="stat-number">{new Set(projetos.flatMap(p => p.tecnologias)).size}</span>
            <span className="stat-label">Tecnologias</span>
          </div>
        </motion.div>

        <motion.div 
          className="project-grid"
          layout
          variants={containerVariants}
        >
          {projetosFiltrados.map((projeto) => (
            <motion.div
              key={projeto.id}
              className={`project-card ${projeto.destaque ? 'featured' : ''}`}
              variants={itemVariants}
              layout
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {projeto.destaque && (
                <div className="featured-badge">
                  <span>Destaque</span>
                </div>
              )}
              
              <div className="project-image-container">
                <img src={projeto.imagem} alt={projeto.nome} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={projeto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      title="Ver código"
                    >
                      <FaGithub />
                    </a>
                    {projeto.demo && (
                      <a
                        href={projeto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        title="Ver demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{projeto.nome}</h3>
                <p>{projeto.descricao}</p>
                
                <div className="project-tech">
                  {projeto.tecnologias.map((tech, i) => {
                    const TechIcon = getTechIcon(tech);
                    return (
                      <span key={i} className="tech-tag">
                        <TechIcon className="tech-icon" />
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <div className="project-actions">
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <FaGithub />
                    Ver Código
                  </a>
                  {projeto.demo && (
                    <a
                      href={projeto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="cta-section" variants={itemVariants}>
          <h3>Interessado em colaborar?</h3>
          <p>
            Estou sempre aberto a novos projetos e desafios. 
            Vamos conversar sobre como posso ajudar seu negócio!
          </p>
          <motion.a
            href="/contato"
            className="cta-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Entre em Contato
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projetos;