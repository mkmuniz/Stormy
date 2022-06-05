import React, { useContext, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';
import { RotaRestrita } from '../../components/auth/rotaRestrita';
import ErroPage from '../../pages/erro/index';
import { ROTAS_USUARIO } from './rotas';
import Home from '../../pages/home/index';
import { validarLogin } from '../../utils/jwt';

export default function RotasPrivadas() {
    const contexto: any = useContext(AuthContext);


    const loginValidado: any = validarLogin()

    useEffect(() => {
        if (loginValidado.erro) {
            contexto.dispatch({ type: loginValidado.id })
        }
    });

    if (loginValidado.erro) {
        return <Navigate to={{
            pathname: "/",
        }} />
    }
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}