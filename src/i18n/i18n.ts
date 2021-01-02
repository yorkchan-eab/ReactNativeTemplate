import * as i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en_json, { en as enMap } from "./en";
import zh_hans_json from "./zh_hans";
import zh_hant_json from "./zh_hant";

const availableLangs = ['en', 'hk', 'cn'];
const zhHantLangs = ['zh-hk', 'zh-tw', 'zh-sg', 'zh-hant', 'hk'];
const zhHansLangs = ['zh', 'zh-cn', 'zh-hans', 'cn', 'hans'];
const en = { translation: en_json };
const hk = { translation: zh_hant_json };
const cn = { translation: zh_hans_json };
function getLanguage(lang: string) {
  if (availableLangs.indexOf(lang) > -1) {
    return lang;
  } else {
    if (zhHantLangs.indexOf(lang) > -1) {
      return 'hk'
    } else if (zhHansLangs.indexOf(lang) > -1) {
      return 'cn'
    } else {
      return 'en'
    }
  }
}

export const i18n = i18next.default
  // .use(LanguageDetector)
  .use(initReactI18next); // if not using I18nextProvider
i18n.init({
  fallbackLng: 'en',
  lng:'en',
  debug: __DEV__,
  lowerCaseLng: true,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  resources: {
    en,
    'zh-hk': hk, 'zh-tw': hk, 'zh-sg': hk, 'zh-hant': hk, hk,
    'zh': cn, 'zh-cn': cn, 'zh-hans': cn, 'hans': cn, cn,
  },
  // react i18next special options (optional)
  react: {
    wait: true,
    bindI18n: 'languageChanged loaded',
    // bindStore: 'added removed',
    nsMode: 'default'
  },
  // backend: {
  //   loadPath: process.env.PUBLIC_URL + "/locales/{{lng}}.json"
  // }
}, (error: any, t: i18next.TFunction) => {
  i18n.changeLanguage(getLang())
});

export function getLang() {
  return getLanguage(i18n.language);
}

type TI18nTrans = { [K in keyof typeof enMap]: (options?: i18next.TFunction | any) => string }
const _i18nTrans: TI18nTrans = {} as any;
for (let key of Object.keys(enMap)) {
  //@ts-ignore
  _i18nTrans[key] = (options?: i18next.TFunction | any) => i18n.t(key, options);
}
export const trans = _i18nTrans;

// declare global {
//   interface String {
//     t(options?: i18next.TFunction | any): string;
//   }
// }

// String.prototype.t = function t(options?: i18next.TFunction | any) {
//   return i18n.t(this as string, options);
// }
