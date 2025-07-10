import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaDatabase, 
  FaLink, 
  FaPaintBrush, 
  FaJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
  FaChartLine,
  FaCode,
  FaGraduationCap,
  FaBriefcase
} from 'react-icons/fa';
import { SiPowerbi, SiTypescript, SiTailwindcss, SiFramer } from 'react-icons/si';

function Sobre() {
  const skills = [
    { icon: FaReact, name: 'React', level: 90 },
    { icon: FaJs, name: 'JavaScript', level: 85 },
    { icon: SiTypescript, name: 'TypeScript', level: 75 },
    { icon: FaHtml5, name: 'HTML5', level: 95 },
    { icon: FaCss3Alt, name: 'CSS3', level: 90 },
    { icon: SiTailwindcss, name: 'Tailwind CSS', level: 85 },
    { icon: FaPython, name: 'Python', level: 80 },
    { icon: FaDatabase, name: 'SQL', level: 85 },
    { icon: SiPowerbi, name: 'Power BI', level: 90 },
    { icon: FaGitAlt, name: 'Git', level: 80 },
    { icon: FaFigma, name: 'Figma', level: 75 },
    { icon: SiFramer, name: 'Framer Motion', level: 70 }
  ];

  const experiences = [
    {
      title: 'Analista de BI',
      company: 'Empresa Tech',
      period: '2022 - Presente',
      description: 'Desenvolvimento de dashboards interativos, análise de dados e criação de relatórios gerenciais usando Power BI e SQL.',
      technologies: ['Power BI', 'SQL', 'Python', 'Excel']
    },
    {
      title: 'Desenvolvedor Front End',
      company: 'Freelancer',
      period: '2021 - Presente',
      description: 'Criação de interfaces modernas e responsivas para diversos clientes, focando em UX/UI e performance.',
      technologies: ['React', 'JavaScript', 'CSS', 'Figma']
    }
  ];

  const education = [
    {
      title: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Faculdade de Tecnologia',
      period: '2020 - 2023',
      status: 'Concluído'
    },
    {
      title: 'Curso de Power BI',
      institution: 'Microsoft Learn',
      period: '2022',
      status: 'Certificado'
    }
  ];

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
          Sobre Mim
        </motion.h2>
        
        <motion.div className="about-grid" variants={itemVariants}>
          <div className="about-text">
            <motion.p variants={itemVariants}>
              Sou Gabriel Da Silva Freitas, um profissional apaixonado por tecnologia que combina 
              desenvolvimento front-end com análise de dados. Com mais de 3 anos de experiência, 
              transformo ideias complexas em soluções digitais elegantes e dados em insights valiosos.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Minha jornada começou com curiosidade sobre como as coisas funcionam na web, 
              evoluindo para uma paixão por criar experiências digitais que realmente fazem a diferença. 
              Hoje, especializo-me em React, JavaScript e análise de dados com Power BI.
            </motion.p>

            <motion.div className="contact-info" variants={itemVariants}>
              <div className="contact-item">
                <strong>📍 Localização:</strong> São Paulo, Brasil
              </div>
              <div className="contact-item">
                <strong>📧 Email:</strong> gabriel@exemplo.com
              </div>
              <div className="contact-item">
                <strong>💼 Status:</strong> Disponível para projetos
              </div>
            </motion.div>
          </div>

          <motion.div className="profile-card" variants={itemVariants}>
            <div className="profile-avatar">
              <span>GF</span>
            </div>
            <h3>Gabriel Freitas</h3>
            <p>Front End Developer & BI Analyst</p>
            <div className="profile-stats">
              <div className="stat">
                <FaCode />
                <span>15+ Projetos</span>
              </div>
              <div className="stat">
                <FaChartLine />
                <span>10+ Dashboards</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="section-divider" variants={itemVariants}>
          <h3><FaCode /> Habilidades Técnicas</h3>
        </motion.div>

        <motion.div className="skills-grid" variants={itemVariants}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-header">
                <skill.icon className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div 
                  className="skill-progress"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="section-divider" variants={itemVariants}>
          <h3><FaBriefcase /> Experiência Profissional</h3>
        </motion.div>

        <motion.div className="experience-list" variants={itemVariants}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="experience-card"
              variants={itemVariants}
            >
              <div className="experience-header">
                <h4>{exp.title}</h4>
                <span className="period">{exp.period}</span>
              </div>
              <div className="company">{exp.company}</div>
              <p>{exp.description}</p>
              <div className="technologies">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="section-divider" variants={itemVariants}>
          <h3><FaGraduationCap /> Formação</h3>
        </motion.div>

        <motion.div className="education-list" variants={itemVariants}>
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              className="education-card"
              variants={itemVariants}
            >
              <div className="education-header">
                <h4>{edu.title}</h4>
                <span className="status">{edu.status}</span>
              </div>
              <div className="institution">{edu.institution}</div>
              <div className="period">{edu.period}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="cta-section" variants={itemVariants}>
          <h3>Vamos Trabalhar Juntos?</h3>
          <p>
            Estou sempre aberto a novos desafios e oportunidades de colaboração. 
            Entre em contato para discutirmos seu próximo projeto!
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/freitasbtw"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Freitassync"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Sobre;