import store from '@/store';
import { getToken } from '@/utils/token';

export const isNotLogged = (to: any, from: any, next: any) => {
    if (store.getters.currentUser || getToken()) { next({ name: 'Default' }) }
    else { next() }
}

export const isLogged = (to: any, from: any, next: any) => {
    if (!store.getters.currentUser || !getToken()) { next({ name: 'Default' }) }
    else { next() }
}

export const homeRedirections = (to: any, from: any, next: any) => {
    if (store.getters.currentUser && getToken() && store.getters.currentUser.role.label === 'ROLE_ADMIN') { next({ name: 'Admin' }) }
    else if (store.getters.currentUser && getToken() && store.getters.currentUser.role.label === 'ROLE_USER') { next({ name: 'User' }) }
    else { next() }
}

export const isAdmin = (to: any, from: any, next: any) => {
    if (store.getters.currentUser && getToken() && store.getters.currentUser.role.label === 'ROLE_ADMIN') {
        next()
    }
    else {
        next({ name: 'Default' })
    }
}

export const isUser = (to: any, from: any, next: any) => {
    if (store.getters.currentUser && getToken() && store.getters.currentUser.role.label === 'ROLE_USER') { next() }
    else {
        next({ name: 'Default' })
    }
}