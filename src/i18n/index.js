import { PT_TRANSLATIONS } from './pt';
import { EN_TRANSLATIONS } from './en';

export const useTranslation = (language = 'pt') => {
  const translations = {
    pt: PT_TRANSLATIONS,
    'pt-BR': PT_TRANSLATIONS,
    en: EN_TRANSLATIONS,
    'en-US': EN_TRANSLATIONS
  };
  
  return translations[language] || translations.pt;
};