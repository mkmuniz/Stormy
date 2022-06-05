import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

/* contexto */
import { AuthProvider } from './context/Auth';

import Rotas from './routes/index';

const client = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
        <Rotas />
      </AuthProvider>
      <ToastContainer />

    </QueryClientProvider>
  );
}

export default App;
