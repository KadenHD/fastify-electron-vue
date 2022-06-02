import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import userStore from '@/store/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    userStore
  },
  plugins: [createPersistedState()]
});
