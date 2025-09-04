import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Introduction from '../components/Introduction';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import SocialLinks from '../components/SocialLinks';
import LanguageSwitcher from '../components/LanguageSwitcher';

const HomePage = styled.div`
  min-height: 100vh;
  width: 100%;
`;

const Section = styled.section`
  scroll-margin-top: 80px;
`;

const Home: React.FC = () => {
  return (
    <HomePage>
      <Navbar />
      <LanguageSwitcher />
      
      <Section id="home">
        <Introduction />
      </Section>
      
      <Section id="about">
        <About />
      </Section>
      
      <Section id="skills">
        <Skills />
      </Section>
      
      <Section id="projects">
        <Projects />
      </Section>
      
      <Section id="contact">
        <SocialLinks />
      </Section>
    </HomePage>
  );
};

export default Home;