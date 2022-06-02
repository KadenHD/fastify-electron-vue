// import axios from 'axios';
// import router from '@/router';

export default {
    state: {
        users: null,
    },
    getters: {
        users: (state) => { return state.users; },
    },
    actions: {
        users(context, users) { context.commit('users', users); },
    },
    mutations: {
        users(state, users) { state.users = users; },
    }
}