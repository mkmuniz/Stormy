import { get, post } from './request';

export async function fazerLogin(body: Object) {
    try {
        const dados = post('/login', body)
        return { ...dados };
    } catch(err) {
        return err
    }
}