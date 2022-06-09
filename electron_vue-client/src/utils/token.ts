const token: string = 'fastify-token';

export const getToken = () => {
    return localStorage.getItem(token);
}

export const removeToken = () => {
    localStorage.removeItem(token);
}

export const setToken = (data: any) => {
    localStorage.setItem(token, data);
}