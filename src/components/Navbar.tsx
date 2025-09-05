import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const NavbarContainer = styled(motion.nav)<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme, isScrolled }) => 
    isScrolled ? `${theme.colors.background}95` : 'transparent'};
  backdrop-filter: ${({ isScrolled }) => isScrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${({ theme, isScrolled }) => 
    isScrolled ? `1px solid ${theme.colors.border}` : 'none'};
  transition: all 0.3s ease;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileNavLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.surface};
  }
`;

const MobileControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const updateActiveSection = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', updateActiveSection);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: t('navigation.home') },
    { id: 'about', label: t('navigation.about') },
    { id: 'skills', label: t('navigation.skills') },
    { id: 'projects', label: t('navigation.projects') },
    { id: 'contact', label: t('navigation.contact') },
  ];

  return (
    <NavbarContainer
      isScrolled={isScrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContent>
        <Logo
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Gabriel
        </Logo>

        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={activeSection === item.id ? 'active' : ''}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        <NavControls>
          <ThemeToggle />
          <LanguageSwitcher />
          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            ☰
          </MobileMenuButton>
        </NavControls>
      </NavContent>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0, 
          y: isMobileMenuOpen ? 0 : -20 
        }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, index) => (
          <MobileNavLink
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isMobileMenuOpen ? 1 : 0, 
              x: isMobileMenuOpen ? 0 : -20 
            }}
            transition={{ delay: index * 0.1 }}
          >
            {item.label}
          </MobileNavLink>
        ))}
        
        <MobileControls>
          <ThemeToggle />
          <LanguageSwitcher />
        </MobileControls>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
