import React from 'react';
import Login from '../pages/login/index';
import SignUp from '../pages/signup/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/index';

export default function Rotas () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/login" element={<Login />} />
                <Route path="/user/signup" element={<SignUp />} />
            </Routes>
        </Router>
    );    
}