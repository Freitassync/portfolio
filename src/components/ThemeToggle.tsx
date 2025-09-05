import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const ToggleButton = styled(motion.button)`
  position: relative;
  width: 60px;
  height: 30px;
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
`;

const IconWrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.primary : theme.colors.text.muted};
  transition: all 0.3s ease;
  z-index: 1;
`;

const Slider = styled(motion.div)`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Label = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Container>
      <Label>{isDarkMode ? 'Dark' : 'Light'}</Label>
      <ToggleButton
        onClick={toggleTheme}
        whileTap={{ scale: 0.95 }}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        <IconWrapper $isActive={!isDarkMode}>
          <FiSun size={14} />
        </IconWrapper>
        <IconWrapper $isActive={isDarkMode}>
          <FiMoon size={14} />
        </IconWrapper>
        <Slider
          animate={{
            x: isDarkMode ? 28 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      </ToggleButton>
    </Container>
  );
};

export default ThemeToggle;
