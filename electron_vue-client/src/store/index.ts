import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import authStore from '@/store/auth';
import userStore from '@/store/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  actions: {

  },
  mutations: {

  },
  modules: {
    authStore,
    userStore
  },
  plugins: [createPersistedState()]
});
