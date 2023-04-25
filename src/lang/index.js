import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from '../Languages/en_cn'
import zhLocale from '../Languages/zh_cn'
import jaLocale from '../Languages/ja_cn'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import elementJaLocale from 'element-ui/lib/locale/lang/ja'
Vue.use(VueI18n)
console.log(zhLocale.home)
const i18n = new VueI18n({
  locale: sessionStorage.getItem("lang") || 'zh',
  messages: {
    en: {
      ...enLocale,
      ...elementEnLocale
    },
    zh: {
      ...zhLocale,
      ...elementZhLocale
    },
    ja: {
      ...jaLocale,
      ...elementJaLocale
    }
  }
})

export default i18n
