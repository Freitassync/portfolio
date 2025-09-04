import React from 'react';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import i18n from './i18n';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <Home />
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;