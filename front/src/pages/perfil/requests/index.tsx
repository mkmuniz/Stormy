import { NavigateFunction, useNavigate } from 'react-router';
import { mudarUsuario } from '../../../api/perfil';

export const mudarPerfil = async (id: String, email: any, name: any) => {
    const element: any = document.getElementById('message');
    const history: NavigateFunction = useNavigate();

    if (name === null) {
        const returnMessage = element.innerHTML = "Dados enviados com sucesso!";
        return await mudarUsuario(id, { "email": email }) && returnMessage && history('/logout');
    } if (email === null) {
        const returnMessage = element.innerHTML = "Dados enviados com sucesso!";
        return await mudarUsuario(id, { "username": name }) && returnMessage && history('/logout');
    } if (name === null && email === null) {
        const returnMessage = element.innerHTML = "Erro, campos não preenchidos!";
        return returnMessage;
    }

    const resultMessage: Object = {
        message: "Alterações feitas com sucesso!",
        status: 200
    }

    await mudarUsuario(id, { "username": name });

    return resultMessage && history('/logout');

}