import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'

const languages = ['en', 'es']

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: 'en',
    whitelist: languages,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: './locales/{{lng}}/{{ns}}.json'
    }
  })

export default i18n
