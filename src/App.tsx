import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import i18n from './i18n';
import Home from './pages/Home';

const AppContent: React.FC = () => {
  const { isDarkMode } = useTheme();
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyles theme={currentTheme} />
      <Home />
    </StyledThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;