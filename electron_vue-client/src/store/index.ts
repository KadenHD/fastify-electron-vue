import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import authStore from '@/store/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alert: {
      type: null,
      message: null,
    },
  },
  getters: {
    alert: (state) => { return state.alert; },
  },
  actions: {
    alertSuccess(context, alert) {
      context.commit('alert', { type: 'success', message: alert });
      setTimeout(() => {
        context.commit('alert', {});
      }, 4000)
    },
    alertError(context, alert) {
      context.commit('alert', { type: 'error', message: alert });
      setTimeout(() => {
        context.commit('alert', {});
      }, 4000)
    },
  },
  mutations: {
    alert(state, alert) { state.alert = alert; },
  },
  modules: {
    authStore,
  },
  plugins: [createPersistedState()]
});
