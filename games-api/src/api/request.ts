import api from './request_config';
import { buscarCookie } from '../context/cookie';
import { COOKIE_TYPES } from '../utils/types';


export const setHeaderAuth = () => {
    const userCookie = buscarCookie(COOKIE_TYPES.USUARIO);
    const authToken = `Bearer ${userCookie}`;
    api.defaults.headers.common.Authorization = authToken;
}

setHeaderAuth();
export const get = async (link: string) => {
    return api.get(link)
}
export const post = async (link: string, body: Object) => {
    return api.post(link, body)
}

export const postAuth = async (link: string, username: string, password: any) => {
    return api.post(link, username, password)
}

export const put = async (link: string, body: Object) => {
    return api.put(link, body)
}
export const patch = async (link: string, body: Object) => {
    return api.patch(link, body)
}
export const del = async (link: string) => {
    return api.delete(link)
}