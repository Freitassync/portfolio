import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaBuilding, FaGraduationCap, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

const AboutSection = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
  min-height: 80vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const BioText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const InfoCards = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled(motion.div)`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const IconContainer = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  height: 48px;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const InfoLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const InfoValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
`;

const About: React.FC = () => {
  const { t } = useTranslation();

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <AboutSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Container>
        <SectionTitle variants={itemVariants}>
          {t('about.title')}
        </SectionTitle>

        <AboutContent>
          <TextContent variants={itemVariants}>
            <BioText>{t('introduction.bio')}</BioText>
            <BioText>{t('introduction.bio2')}</BioText>
          </TextContent>

          <InfoCards variants={containerVariants}>
            <InfoCard variants={cardVariants} whileHover={{ scale: 1.02 }}>
              <IconContainer>
                <FaBuilding />
              </IconContainer>
              <InfoContent>
                <InfoLabel>Empresa</InfoLabel>
                <InfoValue>{t('introduction.company')}</InfoValue>
              </InfoContent>
            </InfoCard>

            <InfoCard variants={cardVariants} whileHover={{ scale: 1.02 }}>
              <IconContainer>
                <FaGraduationCap />
              </IconContainer>
              <InfoContent>
                <InfoLabel>Educação</InfoLabel>
                <InfoValue>FIAP</InfoValue>
              </InfoContent>
            </InfoCard>

            <InfoCard variants={cardVariants} whileHover={{ scale: 1.02 }}>
              <IconContainer>
                <FaCalendar />
              </IconContainer>
              <InfoContent>
                <InfoLabel>Idade</InfoLabel>
                <InfoValue>{t('introduction.age')}</InfoValue>
              </InfoContent>
            </InfoCard>

            <InfoCard variants={cardVariants} whileHover={{ scale: 1.02 }}>
              <IconContainer>
                <FaMapMarkerAlt />
              </IconContainer>
              <InfoContent>
                <InfoLabel>Cargo</InfoLabel>
                <InfoValue>BI Analyst</InfoValue>
              </InfoContent>
            </InfoCard>
          </InfoCards>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;
