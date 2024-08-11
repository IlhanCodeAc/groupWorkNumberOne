import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  en: {
    translation: {
        product: 'AVAILABLE PRODUCTS'
    }
  },
  ru: {
    translation: {
        product: 'ДОСТУПНЫЕ ТОВАРЫ'
    }
  }
};

i18n
  .use(initReactI18next) 
  .use(Backend)
  .init({
    resources, 
    fallbackLng: "en", 

    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
