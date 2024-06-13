import favicon from './extensions/favicon.png'
import logo from './extensions/logo.png'

const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations: {
    en: {
      'app.components.LeftMenu.navbrand.title': 'biride69'
    }
  },
  menu: {
    logo
  },
  head: {
    favicon
  },
  theme: {
    light: {
      colors: {
        primary100: '#683257',
        primary200: '#BD4089',
        primary500: '#BD4089',
        buttonPrimary500: '#C2C1C2',
        primary600: '#F51AA4',
        buttonPrimary600: '#42213D',
        primary700: '#C2C1C2',
      }
    },
    dark: {
        colors: {
            primary100: '#683257',
            primary200: '#BD4089',
            primary500: '#BD4089',
            buttonPrimary500: '#C2C1C2',
            primary600: '#F51AA4',
            buttonPrimary600: '#42213D',
            primary700: '#C2C1C2',
        }
      }
  }
}

const bootstrap = (app) => {
  console.log(app)
}

export default {
  config,
  bootstrap
}