import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  transition: all 0.3s ease;
  height: auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  max-width: 400px;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 140px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.accent} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  overflow: hidden;
  position: relative;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: white;
  padding: ${({ theme }) => theme.spacing.sm};
`;

const ProjectImageFallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: white;
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: auto;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `4px ${theme.spacing.xs}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const ClickHint = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xs};
  right: ${({ theme }) => theme.spacing.xs};
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: ${({ theme }) => `4px ${theme.spacing.xs}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`;

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    github?: string;
    demo?: string;
  };
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const { t } = useTranslation();

  return (
    <Card
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <ImageContainer>
        {project.image ? (
          <ProjectImage src={project.image} alt={project.title} />
        ) : (
          <ProjectImageFallback>{project.title.charAt(0)}</ProjectImageFallback>
        )}
        <ClickHint>{t('clickToExpand')}</ClickHint>
      </ImageContainer>
      
      <CardContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        
        <TechStack>
          {project.technologies.map((tech: string) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </TechStack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
