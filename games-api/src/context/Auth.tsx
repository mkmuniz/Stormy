import React from 'react';

const valorInicial = Object.freeze({
    usuario: undefined,
    token: undefined,
    mensagemErro: undefined
})

export const AuthContext = React.createContext({ ...valorInicial, dispatch: undefined })
