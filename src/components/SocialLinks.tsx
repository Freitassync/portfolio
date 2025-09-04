import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

const SocialSection = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  text-align: center;
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SocialContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0 auto;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  box-shadow: ${({ theme }) => theme.shadows.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    color: ${({ theme }) => theme.colors.primary};
  }

  &.linkedin:hover {
    color: #0077b5;
  }

  &.twitter:hover {
    color: #1da1f2;
  }

  &.github:hover {
    color: #333;
  }

  &.email:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gabriel-dsf',
    icon: FaLinkedin,
    className: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/Freitasbtw',
    icon: FaTwitter,
    className: 'twitter',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Freitassync',
    icon: FaGithub,
    className: 'github',
  },
];

const SocialLinks: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <SocialSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <SectionTitle variants={itemVariants}>
        {t('contact.title')}
      </SectionTitle>
      
      <SocialContainer variants={containerVariants}>
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <SocialLink
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={social.className}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={social.name}
            >
              <IconComponent />
            </SocialLink>
          );
        })}
      </SocialContainer>
    </SocialSection>
  );
};

export default SocialLinks;