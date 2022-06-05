import React, { useContext, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';
import { RotaRestrita } from '../../components/auth/rotaRestrita';
import ErroPage from '../../pages/erro/index';
import { ROTAS_USUARIO } from './rotas';
import Home from '../../pages/home/index';

export default function RotasPrivadas() {
    const { username, dispatch } = useContext(AuthContext);

  const rotasUsuario = useMemo(() => {

    /* gerarRotasPeloTipo */
    let rotas = [];
    rotas = ROTAS_USUARIO;

    return rotas.map((rota, i) => {
      return <RotaRestrita exact key={'user' + i} {...rota} />
    })
  }, [username, dispatch])
    return (
        <Routes>
            {rotasUsuario}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErroPage />} />
        </Routes>
    );
}