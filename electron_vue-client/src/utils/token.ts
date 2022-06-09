const token: string = 'fastify-token';

export const getToken = () => {
    return localStorage.getItem(token);
}

export const removeToken = () => {
    return localStorage.removeItem(token);
}

export const setToken = (data: any) => {
    return localStorage.setItem("dragnreceive-web-token", data);
}