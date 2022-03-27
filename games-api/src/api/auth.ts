import { get } from './request';

export async function fazerLogin() {
    try {
        const dados = get('/usuario')
        return { ...dados };
    } catch(err) {
        return err
    }
}