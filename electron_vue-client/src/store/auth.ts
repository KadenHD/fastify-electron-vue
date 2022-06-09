import axios from 'axios';
import router from '@/router';
import { getToken, removeToken, setToken } from '@/utils/token';

const prefix: string = '/auths/';

export default {
    state: {
        currentUser: null,
    },
    getters: {
        currentUser: (state: any) => { return state.currentUser; },
    },
    actions: {
        currentUser(context: any, currentUser: any) { context.commit('currentUser', currentUser); },
        setCurrentUser(context: any) {
            if (getToken()) {
                axios.get(prefix + "currentUser")
                    .then((response) => {
                        context.dispatch("currentUser", response.data.currentUser);
                        if (!response.data.currentUser) {
                            removeToken()
                        }
                    })
                    .catch(() => {
                        context.dispatch("logout");
                    });
            }
        },
        login(context: any, data: any) {
            axios
                .post(prefix + "login", data)
                .then((response) => {
                    setToken(response.data.token);
                    context.dispatch("currentUser", response.data.currentUser);
                    if (response.data.currentUser.role.label === "ROLE_ADMIN") {
                        router.push({ name: "Admin" });
                    } else if (response.data.currentUser.role.label === "ROLE_USER") {
                        router.push({ name: "User" });
                    }
                })
                .catch((error) => {
                    console.log(error.response)
                });
        },
        logout(context: any) {
            context.commit('currentUser', null);
            removeToken();
            context.commit('clearAll');
            router.push({ name: "Home" });
        },
        clearAll(context: any) {
            context.commit("alert", {});
        },
    },
    mutations: {
        currentUser(state: any, currentUser: any) { state.currentUser = currentUser; },
    },
};