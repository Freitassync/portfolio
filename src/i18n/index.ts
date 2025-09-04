import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './en.json';
import ptBrTranslations from './pt-br.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  'pt-BR': {
    translation: ptBrTranslations,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
