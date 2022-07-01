import { useNavigate } from 'react-router';
import { mudarUsuario } from '../../../api/perfil';

const mudarPerfil = async (id: String, email: String, name: String) => {
    const element: any = document.getElementById('message');
    const history = useNavigate();

    if(name === null) {

        const returnMessage = "Dados enviados com sucesso!";
        return await mudarUsuario(id, {"email": email}) && returnMessage && history('/logout');

    } else if(email === null) {

        const returnMessage = element.innerHTML = "Dados enviados com sucesso!";
        return await mudarUsuario(id, {"username": name}) && returnMessage && history('/logout');

    } else if (name === null && email === null) {

        const returnMessage = element.innerHTML = "Erro, campos não preenchidos!";
        return returnMessage;
    } else {

        const returnMessage = element.innerHTML = "Dados enviados com sucesso!";
        return await mudarUsuario(id, {"username": name}) && returnMessage && history('/logout');
    }
}