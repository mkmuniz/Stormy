import React from 'react';
import Login from '../pages/login/index';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

export default function Rotas () {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );    
}