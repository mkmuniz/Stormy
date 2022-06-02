import { BrowserRouter as Router} from 'react-router-dom';
import RotasPrivadas from './private';
import RotasPublicas from './public';
import { AuthContext } from '../context/Auth';
import { useContext } from 'react';

export default function Rotas () {
    const authContext = useContext(AuthContext);
    return (
        <Router basename="localhost:3000/">
            {(authContext.usuario && !authContext.mensagemErro)
            ?
            <RotasPrivadas /> :
            <RotasPublicas />}
        </Router>
    );    
}