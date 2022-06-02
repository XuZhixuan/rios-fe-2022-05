import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'ZH',
  messages: {
    ZH: require('@/assets/langs/zh/index.json'),
    EN: require('@/assets/langs/en/index.json')
  }
});

export default i18n;
