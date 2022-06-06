import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    zh: require('@/assets/langs/zh/index.json'),
    en: require('@/assets/langs/en/index.json')
  }
});

export default i18n;
