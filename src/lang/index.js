import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from '../Languages/en_cn'
import zhLocale from '../Languages/zh_cn'
import jaLocale from '../Languages/ja_cn'
import daLocale from '../Languages/da_cn'
import esLocale from '../Languages/es_cn'
import koLocale from '../Languages/ko_cn'
import ptLocale from '../Languages/pt_cn'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import elementJaLocale from 'element-ui/lib/locale/lang/ja'
import elementDaLocale from 'element-ui/lib/locale/lang/da'
import elementEsLocale from 'element-ui/lib/locale/lang/es'
import elementKoLocale from 'element-ui/lib/locale/lang/ko'
import elementPtLocale from 'element-ui/lib/locale/lang/pt'
Vue.use(VueI18n)
console.log(zhLocale.home)
const i18n = new VueI18n({
  locale: sessionStorage.getItem("lang") || 'zh',
  messages: {
    zh: {
      ...zhLocale,
      ...elementZhLocale
    },
    en: {
      ...enLocale,
      ...elementEnLocale
    },
    da: {
      ...daLocale,
      ...elementDaLocale
    },
    es: {
      ...esLocale,
      ...elementEsLocale
    },
    ja: {
      ...jaLocale,
      ...elementJaLocale
    },
    ko: {
      ...koLocale,
      ...elementKoLocale
    },
    pt: {
      ...ptLocale,
      ...elementPtLocale
    }
  }
})

export default i18n
