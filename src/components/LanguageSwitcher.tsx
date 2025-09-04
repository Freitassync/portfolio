import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const SwitcherContainer = styled(motion.div)`
  position: fixed;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  z-index: 1001;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 80px;
    right: ${({ theme }) => theme.spacing.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 20px;
  }
`;

const SwitcherButton = styled(motion.button)<{ isActive: boolean }>`
  background: ${({ theme, isActive }) => 
    isActive ? theme.colors.primary : theme.colors.surface};
  color: ${({ theme, isActive }) => 
    isActive ? 'white' : theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-left: ${({ theme }) => theme.spacing.xs};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all 0.2s ease;

  &:first-child {
    margin-left: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  &:hover {
    background: ${({ theme, isActive }) => 
      isActive ? theme.colors.primary : theme.colors.border};
  }
`;

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <SwitcherContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <SwitcherButton
        isActive={i18n.language === 'en'}
        onClick={() => changeLanguage('en')}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </SwitcherButton>
      <SwitcherButton
        isActive={i18n.language === 'pt-BR'}
        onClick={() => changeLanguage('pt-BR')}
        whileTap={{ scale: 0.95 }}
      >
        PT
      </SwitcherButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;