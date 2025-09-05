import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiX, FiExternalLink, FiGithub } from 'react-icons/fi';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaDatabase, 
  FaGitAlt,
  FaAws,
  FaDocker 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis, 
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiMysql,
  SiFastapi,
  SiDjango,
  SiFlask,
  SiVuedotjs,
  SiAngular,
  SiKubernetes,
  SiGraphql,
  SiPrisma
} from 'react-icons/si';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ModalContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.secondary};
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const ModalHeader = styled.div`
  position: relative;
  height: 250px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0 0;
`;

const ProjectImageLarge = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.xl} ${({ theme }) => theme.borderRadius.xl} 0 0;
`;

const ProjectImageFallbackLarge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: white;
`;

const ModalContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const ProjectTitleLarge = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProjectDescriptionLarge = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
`;

const TechSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const TechIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.primary};
`;

const TechName = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;

const ActionSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

const ActionButton = styled.a<{ $variant: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all 0.3s ease;
  border: 2px solid;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};

  ${({ $variant, theme }) =>
    $variant === 'primary'
      ? `
        background: ${theme.colors.primary};
        color: white;
        border-color: ${theme.colors.primary};
        &:hover {
          background: ${theme.colors.secondary};
          border-color: ${theme.colors.secondary};
          transform: translateY(-2px);
        }
      `
      : `
        background: transparent;
        color: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
        &:hover {
          background: ${theme.colors.primary};
          color: white;
          transform: translateY(-2px);
        }
      `}
`;

interface ProjectModalProps {
  project: {
    id: string;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    github?: string;
    demo?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const techIcons: Record<string, React.ReactNode> = {
  // Frontend
  'React': <FaReact color="#61DAFB" />,
  'React.js': <FaReact color="#61DAFB" />,
  'TypeScript': <SiTypescript color="#3178C6" />,
  'JavaScript': <FaJs color="#F7DF1E" />,
  'Next.js': <SiNextdotjs color="#000000" />,
  'Vue.js': <SiVuedotjs color="#4FC08D" />,
  'Angular': <SiAngular color="#DD0031" />,
  'HTML5': <FaHtml5 color="#E34F26" />,
  'CSS3': <FaCss3Alt color="#1572B6" />,
  'Tailwind CSS': <SiTailwindcss color="#06B6D4" />,
  'Vite': <SiVite color="#646CFF" />,
  
  // Backend
  'Node.js': <FaNodeJs color="#339933" />,
  'Express': <SiExpress color="#000000" />,
  'Python': <FaPython color="#3776AB" />,
  'FastAPI': <SiFastapi color="#009688" />,
  'Django': <SiDjango color="#092E20" />,
  'Flask': <SiFlask color="#000000" />,
  
  // Database
  'MongoDB': <SiMongodb color="#47A248" />,
  'PostgreSQL': <SiPostgresql color="#336791" />,
  'MySQL': <SiMysql color="#4479A1" />,
  'Redis': <SiRedis color="#DC382D" />,
  'Database': <FaDatabase color="#336791" />,
  'Prisma': <SiPrisma color="#2D3748" />,
  
  // Tools & Services
  'Git': <FaGitAlt color="#F05032" />,
  'AWS': <FaAws color="#FF9900" />,
  'Docker': <FaDocker color="#2496ED" />,
  'Kubernetes': <SiKubernetes color="#326CE5" />,
  'GraphQL': <SiGraphql color="#E10098" />,
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContainer
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose}>
              <FiX />
            </CloseButton>
            
            <ModalHeader>
              {project.image ? (
                <ProjectImageLarge src={project.image} alt={project.title} />
              ) : (
                <ProjectImageFallbackLarge>
                  {project.title.charAt(0)}
                </ProjectImageFallbackLarge>
              )}
            </ModalHeader>
            
            <ModalContent>
              <ProjectTitleLarge>{project.title}</ProjectTitleLarge>
              <ProjectDescriptionLarge>{project.description}</ProjectDescriptionLarge>
              
              <TechSection>
                <TechTitle>{t('technologiesUsed')}</TechTitle>
                <TechGrid>
                  {project.technologies.map((tech: string) => (
                    <TechItem key={tech}>
                      <TechIcon>
                        {techIcons[tech] || <FaDatabase />}
                      </TechIcon>
                      <TechName>{tech}</TechName>
                    </TechItem>
                  ))}
                </TechGrid>
              </TechSection>
              
              <ActionSection>
                {project.demo && (
                  <ActionButton
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    $variant="primary"
                  >
                    <FiExternalLink size={20} />
                    {t('seeProject')}
                  </ActionButton>
                )}
                {project.github && (
                  <ActionButton
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    $variant="secondary"
                  >
                    <FiGithub size={20} />
                    {t('viewCode')}
                  </ActionButton>
                )}
              </ActionSection>
            </ModalContent>
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
