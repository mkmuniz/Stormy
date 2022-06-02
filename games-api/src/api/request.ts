import api from './request_config';

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