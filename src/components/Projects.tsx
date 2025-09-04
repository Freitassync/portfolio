import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const ProjectsSection = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ProjectsGrid = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const ProjectWrapper = styled.div`
  max-width: 450px;
  width: 100%;
`;

// Featured project
const sampleProjects = [
  {
    title: 'Mindfit',
    description: 'Mindfit é um aplicativo desenvolvido em React Native para promover saúde física, mental e bem-estar, alinhado à visão da Sociedade 5.0. Utilizando inteligência artificial, o Mindfit oferece uma experiência personalizada, com foco em atividade física, nutrição e equilíbrio emocional. Projeto desenvolvido como parte da Fase 3 do curso de Sistemas de Informação da FIAP.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'AI Integration'],
    githubUrl: 'https://github.com/Freitassync/mindfit',
    liveUrl: 'https://mindfit.outis.com.br/home',
    image: 'https://raw.githubusercontent.com/Freitassync/mindfit-flutter-v2/main/assets/logo_mindfit.png',
  },
];

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject({
      ...project,
      github: project.githubUrl,
      demo: project.liveUrl
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <ProjectsSection
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <Container>
          <SectionTitle variants={itemVariants}>
            {t('navigation.projects')}
          </SectionTitle>
          
          <SectionSubtitle variants={itemVariants}>
            {t('projects.subtitle')}
          </SectionSubtitle>

          <ProjectsGrid variants={containerVariants}>
            <ProjectWrapper>
              {sampleProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={{
                    id: project.title.toLowerCase(),
                    title: project.title,
                    description: project.description,
                    technologies: project.technologies,
                    github: project.githubUrl,
                    demo: project.liveUrl,
                    image: project.image
                  }}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </ProjectWrapper>
          </ProjectsGrid>
        </Container>
      </ProjectsSection>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Projects;
