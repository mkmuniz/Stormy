import React from 'react';
import { mudarUsuario } from '../../../api/perfil';

const mudarPerfil = async (e: any, email: String, name: String) => {
    const element: any = document.getElementById('message');
    if(name === null) {
        const returnMessage = element.innerHTML = "Dados enviados com sucesso!";
        return await mudarUsuario(token._id, {"email": email}) && returnMessage && history('/logout');
    } else if(email === null) {
        const returnMessage = element.innerHTML = "Dados enviados com sucesso!";
        return await mudarUsuario(token._id, {"username": name}) && returnMessage && history('/logout');
    } else if (name === null && email === null) {
        const returnMessage = element.innerHTML = "Erro, campos não preenchidos!";
        return returnMessage;
    } else {
        const returnMessage = element.innerHTML = "Dados enviados com sucesso!";
        return await mudarUsuario(token._id, {"username": name}) && returnMessage && history('/logout');
    }
}