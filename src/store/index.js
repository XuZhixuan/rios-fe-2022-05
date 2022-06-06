import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: 'zh'
  },
  getters: {},
  mutations: {
    changeLocale(state, locale) {
      state.lang = locale;
    }
  },
  actions: {},
  modules: {}
});
