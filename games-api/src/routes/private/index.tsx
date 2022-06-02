import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/index';

export default function RotasPrivadas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}