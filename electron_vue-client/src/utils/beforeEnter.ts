import store from '@/store';

export const isNotLogged = (to, from, next) => {
    if (store.getters.currentUser || localStorage.getItem('token_en_question')) next({ name: 'Home' });
    else next();
}

export const isLogged = (to, from, next) => {
    if (!store.getters.currentUser || !localStorage.getItem('token_en_question')) next({ name: 'Home' });
    else next();
}