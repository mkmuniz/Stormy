import Login from '../../pages/login/index';
import SignUp from '../../pages/signup/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/index';

export default function RotasPublicas() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
}