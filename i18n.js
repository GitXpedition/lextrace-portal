import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
       translation: {
          page_status: "Puesta a Punto del Portal",
          attribution_by: "Por",
          pillar1_title: "El Valor de la Visibilidad",
          pillar1_subtitle: "LexTrace unifica la información clave a través de un marco de referencia temporal, transformando el conocimiento disperso en una fuente de confianza.",
          pillar2_title: "Es simple",
          pillar2_subtitle: "Datos clasificados en su escala correcta aseguran la validación y el contexto.",
          pillar3_title: "Lo esencial, finalmente visible",
          pillar3_subtitle: "Nitidez, sentido y confianza. El portal que preparamos va en esa dirección.",
          pillar4_title: "Claridad en Contexto",
          pillar4_subtitle: "Integramos el análisis de eventos y la validación normativa para que operes con seguridad y en pleno cumplimiento.",
         cta_discover: "Iniciemos una convesación",
         cta_contact: "Contacto"
        }
      },
      en: {
translation: {
  page_status: "Portal Tuning",
  attribution_by: "By",
  pillar1_title: "The Value of Visibility",
  pillar1_subtitle: "LexTrace unifies key information within a temporal framework, transforming dispersed knowledge into a trusted source.",
  pillar2_title: "It's simple",
  pillar2_subtitle: "Data, classified at the right scale, ensures validation and context.",
  pillar3_title: "The essential, finally visible",
  pillar3_subtitle: "Clarity, meaning, and confidence. The portal we are preparing heads in that direction.",
  pillar4_title: "Clarity in Context.",
  pillar4_subtitle: "We integrate event analysis and regulatory validation so you can operate securely and in full compliance.",
  cta_discover: "Let's start a conversation",
  cta_contact: "Contact"
}
      }
    }
  });

export default i18n;






