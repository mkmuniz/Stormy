import { Cookies } from "react-cookie";

export function criarCookie(cookieName: string, dados: string) {
    const cookie: any = new Cookies();
    return cookie.set(cookieName, dados, localStorage.setItem(cookie, 'token'))
}