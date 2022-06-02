// import axios from 'axios';
// import router from '@/router';

export default {
    state: {
        currentUser: null,
    },
    getters: {
        currentUser: (state) => { return state.currentUser; },
    },
    actions: {
        currentUser(context, currentUser) { context.commit('currentUser', currentUser); },
    },
    mutations: {
        currentUser(state, currentUser) { state.currentUser = currentUser; },
    },
}